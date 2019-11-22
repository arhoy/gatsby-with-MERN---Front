import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteProfile } from '../../actions/profile';
import CreateProfile from './CreateProfile';

const Dashboard = ({
  user: { user },
  getCurrentProfile,
  deleteProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <div>
      <h1>Hello {user && user.name} </h1>
      <p>
        Member Since{' '}
        <Moment format="MMM Do YYYY">{user && user.user_created_date}</Moment>
      </p>
      This is your private dashboard
      <p> You are a buyer / seller</p>
      <p> Your products / your orders</p>
      <br />
      <hr />
      <h1> Your profile</h1>
      {loading && <span>Loading...</span>}
      {!loading && profile ? (
        <div>
          <pre> {JSON.stringify(profile, null, 2)} </pre>
          <button onClick={() => deleteProfile()}> Delete Profile </button>
        </div>
      ) : (
        <CreateProfile />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteProfile },
)(Dashboard);
