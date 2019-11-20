import React from 'react';

import NoStyleLink from '../Links/NoStyleLink';

const AppLanding = () => {
  return (
    <div>
      <h1>This is the app landing!</h1>
      <p>
        View cool, members only page like access to premium articles and video
      </p>
      <button>
        <NoStyleLink to="/app/dashboard">Get Started</NoStyleLink>
      </button>
    </div>
  );
};

export default AppLanding;
