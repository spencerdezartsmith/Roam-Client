import { SIGNUP_USER, LOGIN_USER } from '../actions/types'

export default function(state = {}, action) {
  switch(action.type) {
    case SIGNUP_USER:
      return { ...state, currentUser: action.payload.data }
    case LOGIN_USER:
      return {...state, currentUser: action.payload.data }
    default:
      return state
  }
}
