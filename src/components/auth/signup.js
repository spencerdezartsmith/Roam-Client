import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupUser } from '../../actions'

class Signup extends Component {
  renderInput(field) {
    const { meta: { error, touched } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    const type = field.label.includes('Password') ? 'password' : 'text'

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type={type} className='form-control' {...field.input}/>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.signupUser(values, this.props.history)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className='container form'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Username'
            name='username'
            component={this.renderInput}
          />
          <Field
            label='Current City'
            name='currentCity'
            component={this.renderInput}
          />
          <Field
            label='Email'
            name='email'
            component={this.renderInput}
          />
          <Field
            label='Password'
            name='password'
            component={this.renderInput}
          />
          <Field
            label='Confirm Password'
            name='confPassword'
            component={this.renderInput}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-default'>Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.username) {
    errors.username = 'Please enter a username'
  }

  if (!values.currentCity) {
    errors.currentCity = 'Please enter your current city'
  }

  if (!values.email) {
    errors.email = 'Please enter a valid email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (values.password !== values.confPassword) {
    errors.confPassword = 'Passwords must match'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'SignupForm'
})(
  connect(null, { signupUser })(withRouter(Signup))
)
