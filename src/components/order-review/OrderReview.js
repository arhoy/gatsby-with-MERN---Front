import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import renderRating from '../../helpers/renderRating';
import { FaUserCircle } from 'react-icons/fa';

const ReviewContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
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

const UserIcon = styled(FaUserCircle)`
  font-size: 5rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
`;

const Customer = styled.span``;

const OrderReview = ({ review }) => {
  return (
    <>
      <pre>{JSON.stringify(review, null, 2)}</pre>
      <ReviewContainer key={review.id}>
        <ReviewHeader>
          <UserIcon />
          <div>
            <ReviewTitle>{review.title}</ReviewTitle>
            <Customer> {review.user.name} </Customer>
          </div>
        </ReviewHeader>
        <ReviewDate>
          {moment.utc(review.createdAt).format('MMM Do YYYY')}
        </ReviewDate>
        <ReviewRating> {renderRating(review.rating)} </ReviewRating>
        <ReviewText>{review.description}</ReviewText>
      </ReviewContainer>
    </>
  );
};

export default OrderReview;
