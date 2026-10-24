// Verified citation registry. Years describe publication, not necessarily data years.
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
    url: 'https://www.harvard.com/book/9780374289980',
  },
  han_burnout: {
    id: 'han_burnout',
    author: 'Byung-Chul Han',
    title: 'The Burnout Society',
    publisher: 'Stanford University Press',
    year: '2015',
    url: 'https://doi.org/10.1515/9780804797504',
  },
  berlant_optimism: {
    id: 'berlant_optimism',
    author: 'Lauren Berlant',
    title: 'Cruel Optimism',
    publisher: 'Duke University Press',
    year: '2011',
    url: 'https://www.dukeupress.edu/cruel-optimism',
  },
  fisher_realism: {
    id: 'fisher_realism',
    author: 'Mark Fisher',
    title: 'Capitalist Realism: Is There No Alternative?',
    publisher: 'Zero Books',
    year: '2009',
    url: 'https://www.simonandschuster.ca/books/Capitalist-Realism/Mark-Fisher/9781780997346',
  },
  graeber_bs: {
    id: 'graeber_bs',
    author: 'David Graeber',
    title: 'Bullshit Jobs: A Theory',
    publisher: 'Simon & Schuster',
    year: '2018',
    url: 'https://davidgraeber.org/books/bullshit-jobs/',
  },
  demographia_2025: {
    id: 'demographia_2025',
    author: 'Wendell Cox',
    title: 'Demographia International Housing Affordability, 2025 Edition',
    publisher: 'Center for Demographics and Policy, Chapman University',
    year: '2025',
    url: 'https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf',
    short: 'Demographia',
  },
  nyc_comptroller_2024: {
    id: 'nyc_comptroller_2024',
    author: 'Office of the New York City Comptroller (Brad Lander administration)',
    title: 'Spotlight: New York City’s Rental Housing Market',
    publisher: 'Office of the New York City Comptroller',
    year: '2024',
    url: 'https://comptroller.nyc.gov/reports/spotlight-new-york-citys-rental-housing-market/',
    short: 'NYC Comptroller',
  },
  gla_2024: {
    id: 'gla_2024',
    author: 'London Assembly Housing Committee',
    title: 'Young Londoners’ Access to Home Ownership',
    publisher: 'Greater London Authority',
    year: '2024',
    url: 'https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-work/london-assembly-publications/young-londoners-access-home-ownership',
    short: 'London Assembly',
  },
  social_comparison_2014: {
    id: 'social_comparison_2014',
    author: 'Erin A. Vogel, Jason P. Rose, Lindsay R. Roberts and Katheryn Eckles',
    title: 'Social Comparison, Social Media, and Self-Esteem',
    publisher: 'Psychology of Popular Media Culture, 3(4), 206–222',
    year: '2014',
    url: 'https://doi.org/10.1037/ppm0000047',
    short: 'Vogel et al.',
  },
  linville_complexity: {
    id: 'linville_complexity',
    author: 'Patricia W. Linville',
    title: 'Self-Complexity as a Cognitive Buffer Against Stress-Related Illness and Depression',
    publisher: 'Journal of Personality and Social Psychology, 52(4), 663–676',
    year: '1987',
    url: 'https://pubmed.ncbi.nlm.nih.gov/3572732/',
    short: 'Linville',
  },
}

export function source(id: string): Source | undefined {
  return sources[id]
}
