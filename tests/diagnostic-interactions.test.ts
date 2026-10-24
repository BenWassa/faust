// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { archetypes } from '../src/data/archetypes'
import { questions } from '../src/data/quiz'
import { initDiagnostic } from '../src/lib/diagnostic-controller'
import { rankDiagnostic } from '../src/lib/diagnostic-scoring'

const samples = [
  { slug: 'watchman', answers: [0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
  { slug: 'visible', answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { slug: 'faithful', answers: [2, 0, 2, 2, 2, 2, 2, 2, 2, 2] },
  { slug: 'departed', answers: [3, 2, 3, 3, 3, 3, 3, 3, 3, 3] },
  { slug: 'architect', answers: [0, 3, 3, 2, 3, 1, 0, 2, 3, 4] },
]

function mount(hash = '') {
  history.replaceState(null, '', `/faust/diagnostic${hash}`)
  const fields = questions.map((q, qi) => `
    <fieldset data-question="${qi}" class="${qi ? 'hidden' : ''}">
      <legend>${q.prompt}</legend>
      ${q.options.map((_opt, oi) => `<button type="button" data-option data-q="${qi}" data-o="${oi}" aria-pressed="false">Option ${oi}</button>`).join('')}
    </fieldset>
  `).join('')
  document.body.innerHTML = `
    <section data-quiz>
      <div data-quiz-intro><button data-quiz-start>Begin</button></div>
      <div data-quiz-body class="hidden">
        <span data-quiz-counter></span><div data-quiz-progress></div>
        ${fields}
        <button data-quiz-back class="hidden">Back</button>
      </div>
      <div data-quiz-result class="hidden">
        <span data-result-icon></span><h2 data-result-title tabindex="-1"></h2>
        <p data-result-logic></p><p data-result-medicine></p><p data-result-secondary></p>
        <a data-result-link></a>
        <button data-result-share><span data-share-label>Share result</span></button>
        <button data-quiz-restart>Retake</button>
      </div>
      <script type="application/json" data-result-data></script>
    </section>
  `
  document.querySelector('[data-result-data]')!.textContent = JSON.stringify(Object.fromEntries(
    archetypes.map((a) => [a.slug, { ...a, href: `/faust/archetypes/${a.slug}` }])
  ))
  initDiagnostic(document.querySelector('[data-quiz]'))
}

function button(question: number, option: number): HTMLButtonElement {
  return document.querySelector<HTMLButtonElement>(`[data-option][data-q="${question}"][data-o="${option}"]`)!
}

function click(selector: string) {
  document.querySelector<HTMLButtonElement>(selector)!.click()
}

function advance(question: number) {
  vi.advanceTimersByTime(question === 9 ? 200 : 180)
}

function complete(answers: readonly number[]) {
  click('[data-quiz-start]')
  answers.forEach((answer, q) => {
    button(q, answer).click()
    advance(q)
  })
}

function title() {
  return document.querySelector('[data-result-title]')?.textContent
}

describe('Diagnostic browser interactions', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    Object.defineProperty(navigator, 'share', { configurable: true, value: undefined })
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined })
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', { configurable: true, value: vi.fn() })
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it.each(samples)('finishes with $slug, an accessible focus target and working result link', ({ slug, answers }) => {
    mount()
    complete(answers)
    expect(title()).toBe(archetypes.find((a) => a.slug === slug)?.title)
    expect(document.querySelector<HTMLAnchorElement>('[data-result-link]')?.pathname).toBe(`/faust/archetypes/${slug}`)
    expect(document.activeElement).toBe(document.querySelector('[data-result-title]'))
    expect(location.hash).toBe(`#${slug}`)
    expect(document.querySelector('[data-quiz-body]')?.classList.contains('hidden')).toBe(true)
  })

  it('restores primary result from a fresh share URL without inventing secondary scores', () => {
    mount('#architect')
    expect(title()).toBe('The Architect')
    expect(document.querySelector('[data-result-secondary]')?.textContent).toBe('')
    expect(document.querySelector('[data-quiz-intro]')?.classList.contains('hidden')).toBe(true)
  })

  it('ignores an unknown hash and starts on the intro', () => {
    mount('#unsupported')
    expect(document.querySelector('[data-quiz-intro]')?.classList.contains('hidden')).toBe(false)
    expect(title()).toBe('')
  })

  it('supports Back and changing an earlier answer without stale scoring or highlights', () => {
    mount()
    click('[data-quiz-start]')
    button(0, 0).click()
    advance(0)
    expect(document.querySelector('[data-quiz-counter]')?.textContent).toBe('Question 2 / 10')
    button(1, 0).click()
    advance(1)
    click('[data-quiz-back]')
    click('[data-quiz-back]')
    expect(document.activeElement).toBe(button(0, 0))
    button(0, 1).click()
    expect(button(0, 0).getAttribute('aria-pressed')).toBe('false')
    expect(button(0, 1).getAttribute('aria-pressed')).toBe('true')
    advance(0)
    expect(button(1, 0).getAttribute('aria-pressed')).toBe('true')
    // Re-answer the second question and finish with visible answers.
    button(1, 1).click()
    advance(1)
    for (let q = 2; q < questions.length; q++) {
      button(q, 1).click()
      advance(q)
    }
    expect(title()).toBe('The Visible')
    expect(document.querySelector('[data-result-secondary]')?.textContent).toBe('')
  })

  it('last rapid tap wins and only a single delayed transition fires', () => {
    mount()
    click('[data-quiz-start]')
    button(0, 0).click()
    button(0, 1).click()
    vi.advanceTimersByTime(179)
    expect(document.querySelector('[data-quiz-counter]')?.textContent).toBe('Question 1 / 10')
    vi.advanceTimersByTime(1)
    expect(document.querySelector('[data-quiz-counter]')?.textContent).toBe('Question 2 / 10')
    expect(button(0, 1).getAttribute('aria-pressed')).toBe('true')
    // Clicking controls in hidden fieldsets cannot modify the current answer.
    button(0, 0).click()
    expect(button(0, 1).getAttribute('aria-pressed')).toBe('true')
  })

  it('cancels a pending advance when Back is used', () => {
    mount()
    click('[data-quiz-start]')
    button(0, 0).click()
    click('[data-quiz-back]')
    vi.advanceTimersByTime(1000)
    expect(document.querySelector('[data-quiz-counter]')?.textContent).toBe('Question 1 / 10')
  })

  it('takes only the last final answer and renders the result once after double taps', () => {
    mount()
    const responses = Array(9).fill(1)
    click('[data-quiz-start]')
    responses.forEach((o, q) => { button(q, o).click(); advance(q) })
    const update = vi.spyOn(history, 'replaceState')
    button(9, 0).click()
    button(9, 1).click()
    vi.advanceTimersByTime(200)
    const slug = rankDiagnostic([...responses, 1])[0].slug
    expect(title()).toBe(archetypes.find((a) => a.slug === slug)?.title)
    expect(update).toHaveBeenCalledTimes(1)
  })

  it('Retake clears all answers, selection visuals, result hash and the old result', () => {
    mount()
    complete(samples[0].answers)
    click('[data-quiz-restart]')
    expect(location.hash).toBe('')
    expect(document.querySelector('[data-quiz-counter]')?.textContent).toBe('Question 1 / 10')
    expect(document.querySelectorAll('[data-option][aria-pressed="true"]')).toHaveLength(0)
    expect(document.activeElement).toBe(button(0, 0))
    // A different result is computed from scratch.
    for (let q = 0; q < 10; q++) { button(q, samples[1].answers[q]).click(); advance(q) }
    expect(title()).toBe('The Visible')
  })

  it('supports arrow-key focus navigation without selecting, alongside native button activation', () => {
    mount()
    click('[data-quiz-start]')
    expect(document.activeElement).toBe(button(0, 0))
    button(0, 0).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    expect(document.activeElement).toBe(button(0, 1))
    expect(button(0, 1).getAttribute('aria-pressed')).toBe('false')
    // Native HTML buttons activate on Enter/Space; click models the browser's activation.
    button(0, 1).click()
    advance(0)
    expect(document.activeElement).toBe(button(1, 0))
  })

  it('uses reduced-motion preferences for result scrolling', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })))
    mount()
    complete(samples[0].answers)
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' })
  })

  it('uses the native share API with a self-contained hash URL, not answers', async () => {
    const share = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'share', { configurable: true, value: share })
    mount()
    complete(samples[4].answers)
    click('[data-result-share]')
    await Promise.resolve()
    expect(share).toHaveBeenCalledWith({
      title: 'The Architecture of Ambition',
      text: 'My diagnosis: The Architect. Find yours.',
      url: 'https://example.test/faust/diagnostic#architect',
    })
  })

  it('falls back to clipboard and does not store or transmit response history', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
    mount()
    complete(samples[0].answers)
    click('[data-result-share]')
    await Promise.resolve()
    await Promise.resolve()
    expect(writeText).toHaveBeenCalledWith('https://example.test/faust/diagnostic#watchman')
    expect(document.querySelector('[data-share-label]')?.textContent).toBe('Link copied')
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('supports legacy copy and reports copy failures instead of claiming success', async () => {
    Object.defineProperty(document, 'execCommand', { configurable: true, value: vi.fn().mockReturnValue(false) })
    mount()
    complete(samples[0].answers)
    click('[data-result-share]')
    await Promise.resolve()
    await Promise.resolve()
    expect(document.querySelector('[data-share-label]')?.textContent).toBe('Copy unavailable')
    expect(document.querySelectorAll('textarea')).toHaveLength(0)
  })

  it('native share cancellation does not silently copy the result', async () => {
    const abort = Object.assign(new Error('Cancelled'), { name: 'AbortError' })
    Object.defineProperty(navigator, 'share', { configurable: true, value: vi.fn().mockRejectedValue(abort) })
    const writeText = vi.fn()
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
    mount()
    complete(samples[0].answers)
    click('[data-result-share]')
    await Promise.resolve()
    await Promise.resolve()
    expect(writeText).not.toHaveBeenCalled()
    expect(document.querySelector('[data-share-label]')?.textContent).toBe('Share result')
  })
})
