import './styles/style.scss'

import { performAction } from './js/app'

export { performAction }

import { updateUI } from './js/app'

export { updateUI }

import { getWeatherbitData } from './js/app'

import { postData } from './js/app'

export { getWeatherbitData, postData }

//loading weather icons
function importAll (r) {
  return r.keys().map(r)
}
importAll(require.context('./media/icons', false, /\.(png)$/))
