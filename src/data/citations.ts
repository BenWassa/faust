// Central citation registry. Claims across the site reference these by id,
// so every quantitative or theoretical claim is traceable to a source.
export interface Source {
  id: string
  author: string
  title: string
  publisher: string
  year: string
  url?: string
  /** Optional short label for inline citations (defaults to author's last word). */
  short?: string
}

export const sources: Record<string, Source> = {
  thompson_workism: {
    id: 'thompson_workism',
    author: 'Derek Thompson',
    title: 'Workism Is Making Americans Miserable',
    publisher: 'The Atlantic',
    year: '2019',
    url: 'https://www.theatlantic.com/ideas/archive/2019/02/religion-workism-making-americans-miserable/583441/',
  },
  sandel_merit: {
    id: 'sandel_merit',
    author: 'Michael J. Sandel',
    title: 'The Tyranny of Merit: What’s Become of the Common Good?',
    publisher: 'Farrar, Straus and Giroux',
    year: '2020',
  },
  han_burnout: {
    id: 'han_burnout',
    author: 'Byung-Chul Han',
    title: 'The Burnout Society',
    publisher: 'Stanford University Press',
    year: '2015',
  },
  berlant_optimism: {
    id: 'berlant_optimism',
    author: 'Lauren Berlant',
    title: 'Cruel Optimism',
    publisher: 'Duke University Press',
    year: '2011',
  },
  fisher_realism: {
    id: 'fisher_realism',
    author: 'Mark Fisher',
    title: 'Capitalist Realism: Is There No Alternative?',
    publisher: 'Zero Books',
    year: '2009',
  },
  graeber_bs: {
    id: 'graeber_bs',
    author: 'David Graeber',
    title: 'Bullshit Jobs: A Theory',
    publisher: 'Simon & Schuster',
    year: '2018',
  },
  demographia_2025: {
    id: 'demographia_2025',
    author: 'Demographia',
    title: 'International Housing Affordability',
    publisher: 'Chapman University / Frontier Centre',
    year: '2025',
  },
  nbc_q3_2025: {
    id: 'nbc_q3_2025',
    author: 'National Bank of Canada',
    title: 'Housing Affordability Monitor, Q3',
    publisher: 'National Bank of Canada',
    year: '2025',
  },
  nyc_comptroller_2023: {
    id: 'nyc_comptroller_2023',
    author: 'NYC Comptroller',
    title: 'The State of Rent Burden in New York City',
    publisher: 'Office of the New York City Comptroller',
    year: '2023',
  },
  gla_2024: {
    id: 'gla_2024',
    author: 'Greater London Authority',
    title: 'Housing and rent-burden investigation',
    publisher: 'City Hall',
    year: '2024',
  },
  linkedin_depression: {
    id: 'linkedin_depression',
    author: 'Social comparison research (meta-analysis)',
    title: 'Professional social platform use and depressive symptoms',
    publisher: 'Journal of Social & Clinical Psychology (representative finding)',
    year: '2018',
    short: 'social-comparison research',
  },
  linville_complexity: {
    id: 'linville_complexity',
    author: 'Patricia Linville',
    title: 'Self-Complexity as a Cognitive Buffer Against Stress-Related Illness',
    publisher: 'Journal of Personality and Social Psychology',
    year: '1987',
  },
}

export function source(id: string): Source | undefined {
  return sources[id]
}
