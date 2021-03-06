import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';
import * as routes from '../../lib/routes';
import googleBtn from '../../assets/google-btn.png';
import './navbar.scss';

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
  // doLogin: () => dispatch(authActions.login()),
});

class Navbar extends React.Component {
  setGoogleOAuthUrl = () => {
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
    const redirect = `redirect_uri=${API_URL}/oauth/google`;
    const scope = '&scope=openid%20email%20profile';
    const clientId = `&client_id=${GOOGLE_OAUTH_ID.trim()}`;
    const prompt = '&prompt=consent%20select_account';
    const responseType = '&response_type=code';
    
    return [baseUrl, redirect, scope, clientId, prompt, responseType].join('');
  }

  renderJSX = (loggedIn) => {
    const JSXNotLoggedIn = // eslint-disable-line
    <ul>
      <li><Link to={routes.ROOT_ROUTE}>Home</Link></li>
      <li><Link to={routes.LOGIN_ROUTE}>Login</Link></li>
      <li><Link to={routes.SIGNUP_ROUTE}>Sign up</Link></li>
      <li><a href={ this.setGoogleOAuthUrl() }><img src={ googleBtn } /></a></li>
    </ul>;

    const JSXLoggedIn = //eslint-disable-line
    <ul>
        <li><Link to={routes.DASHBOARD_ROUTE}> Dashboard </Link></li>
        <li><Link to={routes.PROFILE_ROUTE}> Profile </Link></li>
    </ul>;

    return loggedIn ? JSXLoggedIn : JSXNotLoggedIn;
  }

  render() {
    const { loggedIn, doLogout } = this.props;
    return (
      <header className="header">
        <h1>Awesome App</h1>
        <nav>
          {this.renderJSX(loggedIn)}
        </nav>
        {
          loggedIn ? <button onClick={ doLogout }>Logout</button> : null
        }
      </header>
    );
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
