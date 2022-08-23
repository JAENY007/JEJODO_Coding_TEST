import styled from 'styled-components';
import { Button } from 'antd';

const SignInButton = () => {
  const handleClickReplace = () => {
    window.location.replace('/login');
  };

  return <StyledButton onClick={handleClickReplace}>로그인</StyledButton>;
};

export default SignInButton;

const StyledButton = styled(Button)`
  width: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #14db6a;
  color: #14db6a;
  font-size: 20px;
  font-weight: bold;

  :hover {
    border: 1px solid #db7c3d;
    color: #db7c3d;
  }
`;
