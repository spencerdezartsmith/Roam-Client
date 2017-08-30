import React, { Component } from 'react'
import _ from 'lodash'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCities } from '../actions'

class CitiesIndex extends Component {
  componentDidMount() {
    this.props.fetchCities()
  }

  renderCities() {
    return _.map(this.props.cities, city => {
      return (
        <Link to={`/cities/${city.id}`}>
          <img className='city-image' src={city.city_image} key={city.id} />
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <h1></h1>
        <Carousel slidesToShow={1} initialSlideHeight={70} framePadding='10px'>
          {this.renderCities()}
        </Carousel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cities: state.cities }
}

export default connect(mapStateToProps, { fetchCities })(CitiesIndex)
