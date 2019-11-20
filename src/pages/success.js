import React from 'react';
import Layout5 from '../components/layouts/Layout5';

import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
`;

const Success = () => {
  return (
    <Layout5>
      <Container>
        <h1>Thank you for your order!</h1>
      </Container>
    </Layout5>
  );
};

export default Success;
