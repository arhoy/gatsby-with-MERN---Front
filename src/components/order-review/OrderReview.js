// Product Slug Order Review
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';

import renderRating from '../../helpers/renderRating';
import { FaUserCircle } from 'react-icons/fa';
import {
  addLike,
  removeLike,
  deleteReview,
  editReview,
} from '../../actions/review';
import OrderReviewForm from './OrderReviewForm';

const ReviewContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

const ReviewSubDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  & > * {
    margin: 0.5rem;
  }
`;
const ReviewRating = styled.div``;
const ReviewTitle = styled.h3`
  margin: 0;
  padding: 0;
  line-height: 1.3rem;
`;

const ReviewText = styled.p``;

const ReviewHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  justifyfont-size: 1.5rem;
`;

const ReviewDate = styled.div`
  font-size: 1.4rem;
`;

const ReviewButton = styled.button`
  cursor: pointer;
`;

const ReviewLikes = styled.span`
  font-weight: bold;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 5rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
`;

const Customer = styled.span``;

const OrderReview = ({
  review,
  addLike,
  removeLike,
  deleteReview,
  editReview,
  auth,
}) => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  // find user likes helper function
  const findUserLikes = likes => {
    if (likes.filter(like => like.user === auth.user.data._id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // call deleteReview action
  const deleteReviewHandler = reviewId => {
    deleteReview(reviewId);
  };
  // call editReview action
  const showEditForm = () => {
    setShowOrderForm(preShowOrderForm => !preShowOrderForm);
  };
  // call addLike action
  const toggleLikeHandler = reviewId => {
    if (findUserLikes(review.likes)) {
      removeLike(reviewId);
    } else {
      addLike(reviewId);
    }
  };

  return (
    <>
      <ReviewContainer key={review.id}>
        <ReviewHeader>
          <UserIcon />
          <div>
            <ReviewTitle>{review.title}</ReviewTitle>
            <Customer>{review.user ? review.user.name : 'Anonymous'}</Customer>
          </div>
        </ReviewHeader>
        <ReviewDate>
          {moment.utc(review.createdAt).format('MMM Do YYYY')}
        </ReviewDate>
        <ReviewRating> {renderRating(review.rating)} </ReviewRating>
        <ReviewText>{review.description}</ReviewText>
        <ReviewSubDiv>
          <ReviewButton onClick={deleteReviewHandler.bind(this, review._id)}>
            Delete Review
          </ReviewButton>

          <ReviewButton onClick={showEditForm}>Edit Form</ReviewButton>

          <ReviewButton onClick={toggleLikeHandler.bind(this, review._id)}>
            Add Like Button
          </ReviewButton>
          <ReviewLikes>
            Likes {` `} {review.likes.length}
          </ReviewLikes>
        </ReviewSubDiv>

        {showOrderForm ? <OrderReviewForm edit={true} review={review} /> : null}
      </ReviewContainer>
    </>
  );
};

OrderReview.propTypes = {
  deleteReview: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  editReview: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deleteReview, editReview },
)(OrderReview);
