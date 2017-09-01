import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'

class Login extends Component {
  renderInput(field) {
    const { meta: { error, touched } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    const type = field.label.includes('Password') ? 'password' : ''
      return (
        <div className={className}>
          <label>{field.label}</label>
          <input type={type} className='form-control' {...field.input} />
          <div className='text-help'>
            {touched ? error : ''}
          </div>
        </div>
      )
  }

  onSubmit(values) {
    this.props.loginUser(values, this.props.history)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className='container form'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-default'>Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter a valid email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(
  connect(null, { loginUser })(Login)
)
