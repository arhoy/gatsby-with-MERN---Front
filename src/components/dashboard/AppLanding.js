import React from 'react';

import NoStyleLink from '../Links/NoStyleLink';
import { H1, P } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const AppLanding = () => {
  return (
    <Section>
      <H1>This is the app landing!</H1>
      <P>
        View cool, members only page like access to premium articles and video
      </P>
      <ButtonStyle2>
        <NoStyleLink to="/app/dashboard">Get Started</NoStyleLink>
      </ButtonStyle2>
    </Section>
  );
};

export default AppLanding;
