import styled from '@emotion/styled';

const FormStyle1 = styled.form`
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primaryLight};
  & input {
    margin: 1rem;
  }
`;

export { FormStyle1 };
