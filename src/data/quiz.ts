// The Diagnostic — a forced-choice self-assessment.
// No neutral options: the design principle is "no therapeutic hedging."
// Each option adds weight to one or more archetypes; the highest total wins.
export type ArchetypeSlug = 'watchman' | 'visible' | 'faithful' | 'departed' | 'architect'

export interface QuizOption {
  text: string
  weights: Partial<Record<ArchetypeSlug, number>>
}

export interface QuizQuestion {
  prompt: string
  options: QuizOption[]
}

export const questions: QuizQuestion[] = [
  {
    prompt: 'It’s Sunday night. The feeling that arrives is:',
    options: [
      { text: 'Dread about falling behind — I run the numbers in my head.', weights: { watchman: 2 } },
      { text: 'A quiet checklist of what I’ll post and signal this week.', weights: { visible: 2 } },
      { text: 'Anticipation. Monday is where the meaning is.', weights: { faithful: 2 } },
      { text: 'Nothing. I clock in, I clock out. It’s just a job now.', weights: { departed: 2 } },
    ],
  },
  {
    prompt: 'When someone asks what you do, you:',
    options: [
      { text: 'Say the title — it *is* who I am.', weights: { faithful: 2 } },
      { text: 'Frame it for the audience; positioning matters.', weights: { visible: 2 } },
      { text: 'Downplay it. I’ve stopped identifying with the role.', weights: { departed: 1, architect: 1 } },
      { text: 'Mention it, then the three other things I do.', weights: { architect: 2 } },
    ],
  },
  {
    prompt: 'The thing you can’t stop doing is:',
    options: [
      { text: 'Building a buffer — savings, skills, a margin against collapse.', weights: { watchman: 2 } },
      { text: 'Checking metrics — engagement, reactions, who saw it.', weights: { visible: 2 } },
      { text: 'Working. Rest feels like waste.', weights: { faithful: 2 } },
      { text: 'Maintaining boundaries and frameworks so it all holds together.', weights: { architect: 2 } },
    ],
  },
  {
    prompt: 'What are you most afraid of?',
    options: [
      { text: 'Losing ground I can’t recover — downward mobility.', weights: { watchman: 2 } },
      { text: 'Going invisible. Being forgotten professionally.', weights: { visible: 2 } },
      { text: 'The work ending — and finding no one underneath.', weights: { faithful: 2 } },
      { text: 'Nothing scares me anymore. That’s sort of the problem.', weights: { departed: 2 } },
    ],
  },
  {
    prompt: 'Your relationships lately:',
    options: [
      { text: 'On hold. I’ll have time once I hit the next milestone.', weights: { watchman: 2 } },
      { text: 'Full of contacts, short on people who know the real me.', weights: { visible: 2 } },
      { text: 'Mostly colleagues. Work is where my community is.', weights: { faithful: 2 } },
      { text: 'Protected — but I sometimes feel like I’m coasting alone.', weights: { departed: 1, architect: 1 } },
    ],
  },
  {
    prompt: 'The critique that stings most:',
    options: [
      { text: '“The hustle IS the trap — you’re falling more slowly.”', weights: { watchman: 2 } },
      { text: '“You’ve disappeared into the broadcast.”', weights: { visible: 2 } },
      { text: '“The work won’t love you back.”', weights: { faithful: 2 } },
      { text: '“The injury healed. You’re protecting the scar.”', weights: { departed: 2 } },
    ],
  },
  {
    prompt: 'Effort, in your experience, is:',
    options: [
      { text: 'Necessary insurance against a hostile market.', weights: { watchman: 2 } },
      { text: 'A performance — visible effort is what counts.', weights: { visible: 2 } },
      { text: 'A calling. The point of being alive.', weights: { faithful: 2 } },
      { text: 'A sucker’s game. I give exactly what’s required.', weights: { departed: 2 } },
    ],
  },
  {
    prompt: 'If you couldn’t work for a year, you would:',
    options: [
      { text: 'Panic — the runway math terrifies me.', weights: { watchman: 2 } },
      { text: 'Struggle to exist without an audience to react to.', weights: { visible: 2 } },
      { text: 'Face a genuine identity collapse.', weights: { faithful: 2 } },
      { text: 'Feel relief, then a slow, floating emptiness.', weights: { departed: 2 } },
    ],
  },
  {
    prompt: 'People come to you for:',
    options: [
      { text: 'Nothing — I’m heads-down surviving.', weights: { watchman: 2 } },
      { text: 'The highlight reel; I make things look good.', weights: { visible: 2 } },
      { text: 'Dedication. I’m the one who always shows up.', weights: { faithful: 2 } },
      { text: 'Advice on balance and not burning out.', weights: { architect: 2 } },
    ],
  },
  {
    prompt: 'The truth you most avoid:',
    options: [
      { text: 'The math might not math, no matter how hard I run.', weights: { watchman: 2 } },
      { text: 'I’m watched, but not actually known.', weights: { visible: 2 } },
      { text: 'I’m avoiding the search for meaning by staying busy.', weights: { faithful: 2 } },
      { text: 'Withdrawal is punishing me, not the system.', weights: { departed: 2 } },
      { text: 'Individual solutions can’t fix structural problems.', weights: { architect: 2 } },
    ],
  },
]
