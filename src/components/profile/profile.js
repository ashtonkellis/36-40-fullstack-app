import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as profileActions from '../../actions/profile';
import * as routes from '../../lib/routes';

import ProfileForm from '../profile-form/profile-form';

const mapStateToProps = store => ({
  profile: store.profile,
});

const mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(profileActions.createProfileRequest(profile)),
  updateProfile: profile => dispatch(profileActions.updateProfileRequest(profile)),
  fetchProfile: profile => dispatch(profileActions.fetchProfileRequest(profile)),
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      profile: props.profile || null,
    };
  }

  componentDidMount() {
    this.props.fetchProfile()
      .then((response) => {
        console.log(response, 'FETCH RESPONSE');
      })
      .catch(console.error);
  }

  handleCreate = (profile) => {
    this.props.createProfile(profile)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      });
  }

  handleUpdate = (profile) => {
    this.props.updateProfile(profile);
    this.setState({ editing: false });
  }

  render() {
    const { profile } = this.props;

    if (!profile) return <ProfileForm onComplete={ this.handleCreate }/>;
    
    const profileEditJSX = (
      <div>
        <ProfileForm profile={ profile } onComplete={ this.handleUpdate }/>
        <button onClick={() => this.setState({ editing: false })}>Cancel</button>
      </div>
    );

    const profileDisplayJSX = (
      <div>
        <h2>This is my bio</h2>
        <p>{ profile.bio }</p>
        <button onClick={() => this.setState({ editing: true })}>Edit</button>
      </div>
    );

    return (
      <div>
        <h2>{ `${profile.firstName} ${profile.lastName}` }</h2>
        { this.state.editing ? profileEditJSX : profileDisplayJSX }
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  createProfile: PropTypes.func,
  updateProfile: PropTypes.func,
  fetchProfile: PropTypes.func,
  history: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
