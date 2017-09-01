import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import CitiesIndex from './components/cities_index'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import Logout from './components/auth/logout'
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
          <Route path='/logout' component={Logout} />
          <Route path='/login' component={Login} />
          <Route path='/users/:id' component={UserShow} />
          <Route exact path='/' component={CitiesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'))
