// Product Slug Order Review
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';

import renderRating from '../../helpers/renderRating';
import {
  FaUserCircle,
  FaThumbsUp,
  FaTimesCircle,
  FaEllipsisH,
} from 'react-icons/fa';
import {
  addLike,
  removeLike,
  deleteReview,
  editReview,
} from '../../actions/review';
import OrderReviewForm from './OrderReviewForm';

const ReviewContainer = styled.div`
  position: relative;

  margin: 2rem;
  padding: 2rem;
  background: ${props => props.theme.colors.primaryTransparent};
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
`;

const ReviewSubDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  background: ${props => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
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

const ReviewActionButton = styled.div``;

const ReviewButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin: 0.5rem 0;
  }
`;

const ReviewButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 2px 4px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const ReviewLikes = styled.div`
  position: absolute;
  bottom: -17px;
  right: 0;

  display: flex;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 5rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
`;

const StyledFaTimesCircle = styled(FaTimesCircle)`
  align-self: flex-end;
  color: ${props => props.theme.colors.white};
`;

const StyledFaEllipsisH = styled(FaEllipsisH)`
  color: ${props => props.theme.colors.white};
  display: flex;
`;

const ThumbsUpContainer = styled.div`
  border-radius: 50%;
  margin-right: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
`;
const StyledFaThumbsUp = styled(FaThumbsUp)`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
`;

const LikeCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 3px 6px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
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

  const [showActions, setShowActions] = useState(false);

  const showActionsHandler = () => {
    setShowActions(prev => !prev);
  };

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
    setShowOrderForm(prev => !prev);
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
        <ReviewActionButton>
          {showActions ? (
            <ReviewButtonContainer>
              <StyledFaTimesCircle onClick={showActionsHandler} />
              <ReviewButton onClick={showEditForm}>
                {' '}
                {showOrderForm ? 'Hide Form' : 'Edit Review'}
              </ReviewButton>
              <ReviewButton
                onClick={deleteReviewHandler.bind(this, review._id)}
              >
                Delete Review
              </ReviewButton>
            </ReviewButtonContainer>
          ) : (
            <StyledFaEllipsisH onClick={showActionsHandler} />
          )}
        </ReviewActionButton>
      </ReviewSubDiv>

      <ReviewLikes>
        <ThumbsUpContainer onClick={toggleLikeHandler.bind(this, review._id)}>
          <StyledFaThumbsUp />
        </ThumbsUpContainer>
        <LikeCount>
          {review.likes.length === 1
            ? ` ${review.likes.length} like`
            : ` ${review.likes.length} likes`}
        </LikeCount>
      </ReviewLikes>
      {showOrderForm ? <OrderReviewForm edit={true} review={review} /> : null}
    </ReviewContainer>
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
