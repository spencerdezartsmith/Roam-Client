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
        <Link to={`/cities/${city.id}`} key={city.id}>
          <img className='city-image' src={city.city_image} />
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
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
