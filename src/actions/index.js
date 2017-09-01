import axios from 'axios'

import {
  FETCH_CITIES,
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER_POSTS,
  AUTH_USER,
  UNAUTH_USER
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
        dispatch({ type: AUTH_USER })

        localStorage.setItem('token', savedUser.data.token)

        history.push(`/users/${savedUser.data.id}`)
      })
  }
}

export function loginUser(values, history) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, values)
      .then(user => {
        dispatch({ type: LOGIN_USER, payload: user })
        dispatch({ type: AUTH_USER })

        localStorage.setItem('token', user.data.token)

        history.push(`/users/${user.data.id}`)
      })
  }
}

export function fetchUserPosts(id) {
  const auth = localStorage.getItem('token')
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users/${id}/posts`, { headers: { auth } })
      .then(posts => {
        dispatch({ type: FETCH_USER_POSTS, payload: posts })
      })
  }
}

export function logoutUser(history) {
  return function(dispatch) {
    localStorage.removeItem('token')
    dispatch({ type: UNAUTH_USER })
  }

  history.push('/')
}
