import styled from 'styled-components';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

const SignButtonBox = () => {
  return (
    <StyledWrapper>
      <SignUpButton />
      <SignInButton />
    </StyledWrapper>
  );
};

export default SignButtonBox;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
