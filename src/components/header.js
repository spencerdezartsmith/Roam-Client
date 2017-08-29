import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className='nav-item' key={'profile'}>
          <Link to={`/users/${this.props.userId}`} className='nav-link'>Profile</Link>
        </li>,
        <li className='nav-item' key={'logout'}>
          <Link to='/logout' className='nav-link'>Logout</Link>
        </li>
      ]
    } else {
      return [
        <li className='nav-item' key={'signup'}>
          <Link to='/signup' className='nav-link'>Sign up</Link>
        </li>,
        <li className='nav-item' key={'login'}>
          <Link to='/login' className='nav-link'>Login</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <Link to='/' className='navbar-brand'>Roam</Link>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

export default Header
