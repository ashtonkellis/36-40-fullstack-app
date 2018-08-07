import React from 'react';
import { PropTypes } from 'prop-types';
import validator from 'validator';

import './auth-form.scss';

const emptyState = {
  username: '',
  usernameIsValid: true,
  email: '',
  emailIsValid: true,
  password: '',
  passwordIsValid: true,
  isConflictError: false,
};

const MIN_USERNAME_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 6;
const USERNAME_ERROR_MESSAGE = `Username must be ${MIN_USERNAME_LENGTH} characters long.`;
const EMAIL_ERROR_MESSAGE = 'Invalid email';
const PASSWORD_ERROR_MESSAGE = 'Invalid password';
const CONFLICT_ERROR_MESSAGE = 'Username of email already exists';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
  }

  handleValidation = (name, value) => {
    if (this.props.type === 'login') return true;

    switch (name) {
      case 'username':
        return (value.length >= MIN_USERNAME_LENGTH);
      case 'email':
        return validator.isEmail(value);
      case 'password':
        return (value.length >= MIN_PASSWORD_LENGTH);
      default: 
        return null;
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value,
      [`${name}IsValid`]: this.handleValidation(name, value),
      isConflictError: false,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { emailIsValid, usernameIsValid, passwordIsValid } = this.state;

    if (emailIsValid && usernameIsValid && passwordIsValid) {
      this.props.onComplete(this.state)
        .then(() => {
          this.setState(emptyState);
        })
        .catch((error) => {
          if (error.status === 409) {
            this.setState({ isConflictError: true });
          }
        });
    }
  }

  render() {
    const { type } = this.props;
    const { isConflictError } = this.state;
    const isSignup = type !== 'login';

    const emailJSX = (
      <React.Fragment>
        { !this.state.emailIsValid && <h4 className="error">{ EMAIL_ERROR_MESSAGE }</h4> }
        <input 
          name="email"
          placeholder="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );

    const usernameJSX = (
      <React.Fragment>
        { !this.state.usernameIsValid && <h4 className="error">{ USERNAME_ERROR_MESSAGE }</h4> }
        <input 
          name="username"
          placeholder="username"
          type="text"
          value={ this.state.username }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    );

    const passwordJSX = (
      <React.Fragment>
        { !this.state.passwordIsValid && <h4 className="error">{ PASSWORD_ERROR_MESSAGE }</h4> }
        <input 
          name="password"
          placeholder="password"
          type="password"
          value={ this.state.password }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    );

    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        { isConflictError && <h4 className="error">{ CONFLICT_ERROR_MESSAGE }</h4>}
        { isSignup && emailJSX }
        { usernameJSX }
        { passwordJSX }
        <button type="submit">{ type }</button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  onComplete: PropTypes.func,
  type: PropTypes.string,
};
