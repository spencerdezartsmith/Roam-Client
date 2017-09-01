import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserPosts } from '../actions'
import Card from './display_card'

class UserShow extends Component {
  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.fetchUserPosts(userId)
  }

  render() {
    return (
      <div className='container user-show'>
        <div className='row'>
          <div className='col-md-4 profile-container'>
            <div className='card profile-card'>
              <img className="card-img-top profile-img"
                src="http://s-ak.buzzfed.com/static/enhanced/web03/2010/4/6/16/enhanced-buzz-11539-1270587474-31.jpg"
                alt="Card image cap" />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Name</li>
                <li className='list-group-item'>Date Joined</li>
                <li className='list-group-item'>Current City</li>
              </ul>
              <div className='card-block'>
                <button type='submit' className='btn btn-primary'>Edit Profile</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <Card />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.users[ownProps.match.params.id],
    posts: state.posts.userPosts
  }
}

export default connect(mapStateToProps, { fetchUserPosts })(UserShow)
