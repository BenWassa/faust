import { questions, type ArchetypeSlug } from '../data/quiz'
import { archetypeOrder, rankDiagnostic } from './diagnostic-scoring'

interface ResultDetails {
  title: string
  icon: string
  coreLogic: string
  medicine: string
  href: string
}

export function initDiagnostic(root: Element | null): void {
  if (!root) return

  const payload = root.querySelector('[data-result-data]')?.textContent || '{}'
  const results = JSON.parse(payload) as Partial<Record<ArchetypeSlug, ResultDetails>>
  const total = root.querySelectorAll('[data-question]').length
  if (!total) return

  const intro = root.querySelector<HTMLElement>('[data-quiz-intro]')!
  const body = root.querySelector<HTMLElement>('[data-quiz-body]')!
  const result = root.querySelector<HTMLElement>('[data-quiz-result]')!
  const counter = root.querySelector<HTMLElement>('[data-quiz-counter]')!
  const progress = root.querySelector<HTMLElement>('[data-quiz-progress]')!
  const back = root.querySelector<HTMLButtonElement>('[data-quiz-back]')!
  const shareButton = root.querySelector<HTMLButtonElement>('[data-result-share]')!
  const shareLabel = root.querySelector<HTMLElement>('[data-share-label]')!

  const answers: Array<number | null> = Array(total).fill(null)
  let current = 0
  let pending: number | null = null
  let selectedResult: ArchetypeSlug | null = null

  function cancelTransition() {
    if (pending !== null) window.clearTimeout(pending)
    pending = null
  }

  function markSelected(questionIndex: number) {
    root!.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((button) => {
      if (Number(button.dataset.q) !== questionIndex) return
      const chosen = Number(button.dataset.o) === answers[questionIndex]
      button.classList.toggle('border-rust', chosen)
      button.classList.toggle('bg-rust/5', chosen)
      button.setAttribute('aria-pressed', String(chosen))
    })
  }

  function showQuestion(index: number) {
    cancelTransition()
    current = index
    selectedResult = null
    intro.classList.add('hidden')
    result.classList.add('hidden')
    body.classList.remove('hidden')

    root!.querySelectorAll<HTMLElement>('[data-question]').forEach((fieldset, i) => {
      fieldset.classList.toggle('hidden', index !== i)
    })
    counter.textContent = `Question ${index + 1} / ${total}`
    progress.style.width = `${(index / total) * 100}%`
    back.classList.toggle('hidden', index === 0)
    back.classList.toggle('flex', index !== 0)

    const fieldset = root!.querySelector<HTMLElement>(`[data-question="${index}"]`)
    const previouslyChosen = fieldset?.querySelector<HTMLButtonElement>('[data-option][aria-pressed="true"]')
    const target = previouslyChosen ?? fieldset?.querySelector<HTMLButtonElement>('[data-option]')
    target?.focus({ preventScroll: true })
  }

  function renderResult(slug: ArchetypeSlug, secondary: ArchetypeSlug | null, fromAnswers: boolean) {
    const details = results[slug]
    if (!details) return
    cancelTransition()
    selectedResult = slug
    intro.classList.add('hidden')
    body.classList.add('hidden')
    result.classList.remove('hidden')
    root!.querySelector<HTMLElement>('[data-result-icon]')!.textContent = details.icon
    const heading = root!.querySelector<HTMLElement>('[data-result-title]')!
    heading.textContent = details.title
    root!.querySelector<HTMLElement>('[data-result-logic]')!.textContent = details.coreLogic
    root!.querySelector<HTMLElement>('[data-result-medicine]')!.textContent = details.medicine
    root!.querySelector<HTMLAnchorElement>('[data-result-link]')!.href = details.href
    root!.querySelector<HTMLElement>('[data-result-secondary]')!.textContent = secondary && results[secondary]
      ? `Your secondary pattern leans toward ${results[secondary].title}. Most people are a blend — but the dominant shape is where the medicine lands hardest.`
      : ''
    shareLabel.textContent = 'Share result'

    if (fromAnswers) {
      try {
        history.replaceState(null, '', `${location.pathname}${location.search}#${slug}`)
      } catch {
        // Embedding contexts may disallow history changes; the quiz still works.
      }
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
      if (typeof result.scrollIntoView === 'function') {
        result.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      }
      heading.focus({ preventScroll: true })
    }
  }

  function finish() {
    if (answers.some((answer) => answer === null)) return
    const ranked = rankDiagnostic(answers)
    const first = ranked[0]
    if (!first || first.score <= 0) return
    const secondary = ranked[1]?.score > 0 ? ranked[1].slug : null
    renderResult(first.slug, secondary, true)
  }

  root.querySelector('[data-quiz-start]')?.addEventListener('click', () => showQuestion(0))

  root.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((button) => {
    button.addEventListener('click', () => {
      const qi = Number(button.dataset.q)
      const oi = Number(button.dataset.o)
      // Hidden/stale controls cannot mutate answers during delayed transitions.
      if (qi !== current || body.classList.contains('hidden')) return
      if (!questions[qi]?.options[oi]) return
      answers[qi] = oi
      markSelected(qi)
      cancelTransition()
      pending = window.setTimeout(() => {
        if (qi === total - 1) finish()
        else showQuestion(qi + 1)
      }, qi === total - 1 ? 200 : 180)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-question]').forEach((fieldset) => {
    fieldset.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
      const buttons = Array.from(fieldset.querySelectorAll<HTMLButtonElement>('[data-option]'))
      const index = buttons.indexOf(document.activeElement as HTMLButtonElement)
      if (index === -1) return
      event.preventDefault()
      const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1
      buttons[(index + direction + buttons.length) % buttons.length].focus()
    })
  })

  back.addEventListener('click', () => showQuestion(Math.max(0, current - 1)))

  root.querySelector('[data-quiz-restart]')?.addEventListener('click', () => {
    cancelTransition()
    answers.fill(null)
    root!.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((button) => {
      button.classList.remove('border-rust', 'bg-rust/5')
      button.setAttribute('aria-pressed', 'false')
    })
    if (archetypeOrder.some((slug) => location.hash === `#${slug}`)) {
      try {
        history.replaceState(null, '', `${location.pathname}${location.search}`)
      } catch {
        // Nonessential hash cleanup may be restricted in embedded browsers.
      }
    }
    showQuestion(0)
  })

  async function copyLink(value: string): Promise<void> {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
        return
      }
    } catch {
      // Fall back to selection-based copying when clipboard permissions deny access.
    }
    const temporary = document.createElement('textarea')
    temporary.value = value
    temporary.setAttribute('readonly', '')
    temporary.style.position = 'fixed'
    temporary.style.opacity = '0'
    document.body.appendChild(temporary)
    try {
      temporary.select()
      if (!document.execCommand?.('copy')) throw new Error('Copy failed')
    } finally {
      temporary.remove()
    }
  }

  shareButton.addEventListener('click', async () => {
    if (!selectedResult || shareButton.disabled) return
    shareButton.disabled = true
    const link = new URL(location.href)
    link.hash = selectedResult
    const data = {
      title: 'The Architecture of Ambition',
      text: `My diagnosis: ${results[selectedResult]?.title ?? ''}. Find yours.`,
      url: link.href,
    }
    try {
      if (navigator.share) {
        try {
          await navigator.share(data)
          return
        } catch (error) {
          // Cancelling a native share must not unexpectedly copy to clipboard.
          if (error instanceof Error && error.name === 'AbortError') return
        }
      }
      await copyLink(link.href)
      shareLabel.textContent = 'Link copied'
    } catch {
      shareLabel.textContent = 'Copy unavailable'
    } finally {
      shareButton.disabled = false
    }
  })

  // A shared #archetype link restores only the result, never a fabricated
  // response history or secondary score. Answers are never persisted or sent.
  const shared = decodeURIComponent(location.hash.slice(1))
  if (archetypeOrder.includes(shared as ArchetypeSlug) && results[shared as ArchetypeSlug]) {
    renderResult(shared as ArchetypeSlug, null, false)
  }
}
