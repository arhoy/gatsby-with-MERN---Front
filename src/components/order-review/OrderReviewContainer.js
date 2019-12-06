import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import OrderReviews from './OrderReviews';
import OrderReviewForm from './OrderReviewForm';
import { H2 } from '../reusableStyles/typography/Typography';
import { UnderLineStyleLink } from '../Links/MoreLinkStyles';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const Div = styled.div``;

const OrderReviewContainer = ({ auth: { isAuthenticated, user }, slug }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const toggleFormReviewHandler = () => {
    setShowReviewForm(prevState => !prevState);
  };
  return (
    <Div>
      <H2>All Customer Reviews</H2>
      {isAuthenticated && user ? (
        <>
          {showReviewForm ? (
            <>
              <ButtonStyle2 onClick={toggleFormReviewHandler}>
                Hide Review Form
              </ButtonStyle2>
              <OrderReviewForm slug={slug} />
            </>
          ) : (
            <ButtonStyle2 onClick={toggleFormReviewHandler}>
              Click to Add Your Own Review
            </ButtonStyle2>
          )}
        </>
      ) : (
        <div>
          Please <UnderLineStyleLink to="/app/login">login</UnderLineStyleLink>{' '}
          to review products
        </div>
      )}

      <OrderReviews slug={slug} />
    </Div>
  );
};

OrderReviewContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(OrderReviewContainer);
