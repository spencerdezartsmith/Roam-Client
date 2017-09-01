import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserPosts } from '../actions'
import Card from './display_card'

class UserShow extends Component {
  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.fetchUserPosts(userId)
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Card
          content={post.content}
          key={post.id}
          cityId={post.city_id}
          postId={post.id}
        />
      )
    })
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }

    return (
      <div className='container user-show'>
        <div className='row'>
          <div className='col-md-4 profile-container'>
            <div className='card profile-card'>
              <img className="card-img-top profile-img"
                src={this.props.user.profile_photo}
                alt="Card image cap" />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{this.props.user.username}</li>
                <li className='list-group-item'>{this.props.user.join_date}</li>
                <li className='list-group-item'>{this.props.user.current_city}</li>
              </ul>
              <div className='card-block'>
                <button type='submit' className='btn btn-primary'>Edit Profile</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            {this.renderPosts()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.users.currentUser,
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchUserPosts })(UserShow)
