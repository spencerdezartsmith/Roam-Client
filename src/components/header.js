import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions'
import { connect } from 'react-redux'

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated && this.props.user) {
      return [
        <li className='nav-item' key={'profile'}>
          <NavLink to={`/users/${this.props.user.id}`} className='nav-link'>Profile</NavLink>
        </li>,
        <li className='nav-item' key={'logout'}>
          <NavLink to='/logout' className='nav-link'>Logout</NavLink>
        </li>
      ]
    } else {
      return [
        <li className='nav-item' key={'signup'}>
          <NavLink to='/signup' className='nav-link'>Sign up</NavLink>
        </li>,
        <li className='nav-item' key={'login'}>
          <NavLink to='/login' className='nav-link'>Login</NavLink>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <NavLink to='/' className='navbar-brand'>Roam</NavLink>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth,
    user: state.users.currentUser
  }
}

export default connect(mapStateToProps)(Header)
