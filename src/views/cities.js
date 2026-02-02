import { CitiesLayout } from '../cities/index.js'
import { Header } from './shared.js'

export const CitiesView = (state) => `
      ${Header('02', 'The Cities', 'Where ambition goes to pay rent.', 'cities')}
      ${CitiesLayout(state)}
  `
