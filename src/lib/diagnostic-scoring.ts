import { archetypes } from '../data/archetypes'
import { questions, type ArchetypeSlug, type QuizQuestion } from '../data/quiz'

export interface DiagnosticScore {
  slug: ArchetypeSlug
  score: number
}

// Explicit, stable order for equal scores. Preserve the existing result order;
// changing the weights or tie policy is an editorial decision (#3).
export const archetypeOrder = archetypes.map((a) => a.slug as ArchetypeSlug)

export function rankDiagnostic(
  answers: ReadonlyArray<number | null | undefined>,
  quiz: readonly QuizQuestion[] = questions,
  order: readonly ArchetypeSlug[] = archetypeOrder
): DiagnosticScore[] {
  const totals = new Map<ArchetypeSlug, number>(order.map((slug) => [slug, 0]))

  quiz.forEach((question, questionIndex) => {
    const optionIndex = answers[questionIndex]
    if (optionIndex == null || !Number.isInteger(optionIndex)) return
    const option = question.options[optionIndex]
    if (!option) return
    for (const slug of order) {
      totals.set(slug, (totals.get(slug) ?? 0) + (option.weights[slug] ?? 0))
    }
  })

  return order
    .map((slug, priority) => ({ slug, score: totals.get(slug) ?? 0, priority }))
    .sort((a, b) => b.score - a.score || a.priority - b.priority)
    .map(({ slug, score }) => ({ slug, score }))
}
