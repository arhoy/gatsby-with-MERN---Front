import styled from '@emotion/styled';

const FormStyle1 = styled.form`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primaryLight};
  & input {
    margin: 1rem;
  }
`;

export { FormStyle1 };
