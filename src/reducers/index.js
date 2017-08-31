import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import citiesReducer from './cities_reducer'
import usersReducer from './users_reducer'
import postsReducer from './posts_reducer'

const rootReducer = combineReducers({
  cities: citiesReducer,
  form: formReducer,
  users: usersReducer,
  posts: postsReducer
})

export default rootReducer
