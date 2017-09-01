import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE }
from '../actions/types'

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return true
    case UNAUTH_USER:
      return false
    default:
      return state
  }
}
