import _ from 'lodash'
import { FETCH_CITIES } from '../actions/types'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CITIES:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
