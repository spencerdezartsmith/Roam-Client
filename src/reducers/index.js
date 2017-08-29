import { combineReducers } from 'redux'
import citiesReducer from './cities_reducer'

const rootReducer = combineReducers({
  cities: citiesReducer
})

export default rootReducer
