import { describe, expect, it } from 'vitest'
import { questions, type QuizQuestion } from '../src/data/quiz'
import { archetypes } from '../src/data/archetypes'
import { archetypeOrder, rankDiagnostic } from '../src/lib/diagnostic-scoring'

describe('Diagnostic scoring contract', () => {
  const cases = [
    { name: 'watchman', answers: [0, 3, 0, 0, 0, 0, 0, 0, 0, 0], winner: 18 },
    { name: 'visible', answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], winner: 20 },
    { name: 'faithful', answers: [2, 0, 2, 2, 2, 2, 2, 2, 2, 2], winner: 20 },
    { name: 'departed', answers: [3, 2, 3, 3, 3, 3, 3, 3, 3, 3], winner: 14 },
    // Architect has fewer dedicated options; this spread is intentionally required.
    { name: 'architect', answers: [0, 3, 3, 2, 3, 1, 0, 2, 3, 4], winner: 9 },
  ] as const

  it('keeps ten nonempty questions and valid positive finite weights', () => {
    expect(questions).toHaveLength(10)
    expect(archetypes).toHaveLength(5)
    expect(new Set(archetypeOrder).size).toBe(5)
    for (const q of questions) {
      expect(q.prompt.trim().length).toBeGreaterThan(0)
      expect(q.options.length).toBeGreaterThanOrEqual(2)
      for (const opt of q.options) {
        expect(opt.text.trim().length).toBeGreaterThan(0)
        expect(Object.keys(opt.weights).length).toBeGreaterThan(0)
        for (const [slug, value] of Object.entries(opt.weights)) {
          expect(archetypeOrder).toContain(slug)
          expect(Number.isFinite(value) && value > 0).toBe(true)
        }
      }
    }
  })

  it.each(cases)('reaches the $name archetype with reproducible scores', ({ name, answers, winner }) => {
    const ranks = rankDiagnostic([...answers])
    expect(ranks[0]).toEqual({ slug: name, score: winner })
    expect(ranks.map(({ slug }) => slug).sort()).toEqual([...archetypeOrder].sort())
  })

  it('preserves stable archetype registry precedence for tied scores, not first lead', () => {
    const synthetic: QuizQuestion[] = [
      { prompt: 'tie', options: [{ text: 'tie', weights: { visible: 2, architect: 2, watchman: 2 } }] },
    ]
    expect(rankDiagnostic([0], synthetic).slice(0, 3)).toEqual([
      { slug: 'watchman', score: 2 },
      { slug: 'visible', score: 2 },
      { slug: 'architect', score: 2 },
    ])
  })

  it('orders secondary by score and uses registry order as a tie-break', () => {
    const synthetic: QuizQuestion[] = [
      { prompt: 'first', options: [{ text: 'A', weights: { faithful: 2, visible: 2 } }] },
      { prompt: 'second', options: [{ text: 'B', weights: { architect: 1 } }] },
    ]
    expect(rankDiagnostic([0, 0], synthetic).slice(0, 3)).toEqual([
      { slug: 'visible', score: 2 },
      { slug: 'faithful', score: 2 },
      { slug: 'architect', score: 1 },
    ])
  })

  it('recalculates previous choices instead of accumulating replaced weights', () => {
    const selections: Array<number | null> = Array(10).fill(null)
    selections[0] = 0
    expect(rankDiagnostic(selections)[0]).toEqual({ slug: 'watchman', score: 2 })
    selections[0] = 1
    const once = rankDiagnostic(selections)
    expect(once.find((r) => r.slug === 'watchman')?.score).toBe(0)
    expect(once.find((r) => r.slug === 'visible')?.score).toBe(2)
    expect(rankDiagnostic(selections)).toEqual(once)
  })

  it('ignores unanswered and invalid choices without mutating the selections', () => {
    const input = [null, -1, 999, 2.5]
    const before = [...input]
    expect(rankDiagnostic(input).every((item) => item.score === 0)).toBe(true)
    expect(input).toEqual(before)
  })
})
