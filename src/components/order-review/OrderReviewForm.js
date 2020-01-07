import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { addReviewForSlug, editReview } from '../../actions/review';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > * {
    margin: 1rem;
    width: 30rem;
    background: ${props => props.theme.colors.lightgrey};
  }
  & input,
  textarea {
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
  }
  & button {
    cursor: pointer;
    background: ${props => props.theme.colors.primary};
    outline: none;
    border: none;
    color: ${props => props.theme.colors.white};
    padding: 0.5rem 0;
  }
`;

// set edited to true if the form is being edited
const OrderReviewForm = ({
  addReviewForSlug,
  slug,
  edit,
  editReview,
  review,
  reviewError,
}) => {
  const [formData, setFormData] = useState({
    title: edit ? `${review.title}` : '',
    description: edit ? `${review.description}` : '',
    rating: edit ? `${review.rating}` : '',
  });

  const { title, description, rating } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // call addReview for slug action
    let res;
    if (edit) {
      res = await editReview(formData, review.id);
    } else {
      res = await addReviewForSlug(formData, slug);
    }

    // clear the form data if the data is submitted and cleared
    if (res) {
      setFormData({ ...formData, title: '', description: '', rating: '' });
    }
  };

  return (
    <div>
      <Form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Review Title"
          name="title"
          value={title}
          onChange={e => onChange(e)}
          required
        />

        <input
          type="number"
          placeholder="Your Rating (1 to 5 stars)"
          name="rating"
          value={rating}
          onChange={e => onChange(e)}
          min="1"
          max="5"
          required
        />

        <textarea
          type="text"
          cols="30"
          rows="5"
          placeholder="Review Description"
          name="description"
          value={description}
          onChange={e => onChange(e)}
          required
        />

        <button className="btn" type="submit">
          Submit
        </button>
        <div>{reviewError && reviewError}</div>
      </Form>
    </div>
  );
};

OrderReviewForm.propTypes = {
  addReviewForSlug: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  reviewError: state.review.error,
});

export default connect(
  mapStateToProps,
  { addReviewForSlug, editReview },
)(OrderReviewForm);
