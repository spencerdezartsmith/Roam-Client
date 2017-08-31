import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import CitiesIndex from './components/cities_index'
import Signup from './components/auth/signup'
import UserShow from './components/user_show'
import Header from './components/header'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/users/:id' component={UserShow} />
          <Route path='/' component={CitiesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'))
