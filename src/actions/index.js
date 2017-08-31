import axios from 'axios'
// import history from './history'

import {
  FETCH_CITIES,
  SIGNUP_USER,
  FETCH_USER_POSTS
 } from './types'


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

export function signupUser(values, history) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, values)
      .then(savedUser => {
        dispatch({ type: SIGNUP_USER, payload: savedUser })

        localStorage.setItem('token', savedUser.data.token)

        history.push(`/users/${savedUser.data.id}`)
      })
  }
}

export function fetchPostsForUser(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users/${id}/posts`)
      .then(posts => {
        dispatch({ type: FETCH_USER_POSTS})
      })
  }
}
