import axios from 'axios'
import { FETCH_CITIES } from './types'

const ROOT_URL = 'http://localhost:3000/api'

export function fetchCities() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/`)
      .then(cities => {
        dispatch({ type: FETCH_CITIES, payload: cities })
      })
      // NOTE: add error handling
  }
}
