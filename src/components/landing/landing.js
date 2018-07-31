import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthForm from '../auth-form/auth-form';
import * as authActions from '../../actions/auth';
import * as routes from '../../lib/routes';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  userSignup: user => dispatch(authActions.userSignup(user)),
  userLogin: user => dispatch(authActions.userLogin(user)),
});


class Landing extends React.Component {
  handleSignup = (user) => {
    this.props.userSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleLogin = (user) => {
    this.props.userLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }
  
  renderRoot = () => (
    <div>
      <h2>Welcome</h2>
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )

  renderSignUp = () => (
      <div>
        <h2>Sign Up</h2>
        <AuthForm onComplete={ this.handleSignup }/>
        <p>Already have an account?</p>
        <Link to="/login"> Login </Link>
      </div>
  );

  renderLogin = () => (
      <div>
        <h2> login </h2>
        <AuthForm type="login" onComplete={this.handleLogin} />
        <p> Don&#39;t have an account? </p>
        <Link to="/signup"> signup </Link>
      </div>
  );

  render() {
    const { pathname } = this.props.location;

    switch (pathname) {
      case routes.ROOT_ROUTE:
        return this.renderRoot();
      case routes.SIGNUP_ROUTE:
        return this.renderSignUp();
      case routes.LOGIN_ROUTE:
        return this.renderLogin();
      default:
        return this.renderRoot();    
    }
  }
}

Landing.propTypes = {
  userLogin: PropTypes.func,
  userSignup: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
