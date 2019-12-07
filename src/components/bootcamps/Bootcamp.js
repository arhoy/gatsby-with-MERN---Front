import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import styled from '@emotion/styled';
import { H3, Bold } from '../reusableStyles/typography/Typography';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const Div = styled.div`
  padding: 2rem;
  border: 2px solid ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BootcampCost = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
`;

const P = styled.p`
  text-align: center;
  padding: 2rem 0.5rem;
`;

const Title = styled(H3)`
  padding: 1rem;
`;

const Course = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.black};
  & h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const Span = styled.div`
  font-size: 1.3rem;
`;
const Bootcamp = ({ bootcamp }) => {
  const [showCourse, setShowCourse] = useState(false);
  const toggleShowCourseHandler = () => {
    setShowCourse(prev => !prev);
  };
  return (
    <Div>
      <Title> {bootcamp.name}</Title>
      <BootcampCost>
        {bootcamp.averageCost && (
          <>
            <NumberFormat
              value={bootcamp.averageCost}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
            <Span> (avg price) </Span>
          </>
        )}
      </BootcampCost>
      <P>{bootcamp.description}</P>
      <ButtonStyle2 onClick={toggleShowCourseHandler}>
        {showCourse ? 'Hide Courses' : 'Show Course List'}
      </ButtonStyle2>
      {showCourse ? (
        <>
          {bootcamp.courses &&
            bootcamp.courses.map(course => (
              <Course key={course._id}>
                <h3>
                  <Bold>Course: </Bold> {course.title}
                </h3>
                <p>
                  <Bold>Price: </Bold>
                  <NumberFormat
                    value={course.tuition}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </p>
                <p>
                  <Bold>Duration: </Bold> {course.weeks} weeks
                </p>
                <p>
                  <Bold>Level: </Bold> {course.minimumSkill}
                </p>
                <p>
                  <Bold>Description: </Bold> {course.description}
                </p>
              </Course>
            ))}
        </>
      ) : null}
    </Div>
  );
};

export default Bootcamp;
