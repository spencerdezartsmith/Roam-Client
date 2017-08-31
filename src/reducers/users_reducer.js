import { SIGNUP_USER } from '../actions/types'

export default function(state = {}, action) {
  switch(action.type) {
    case SIGNUP_USER:
      return { ...state, [action.payload.data] : action.payload.data }
    default:
      return state
  }
}
