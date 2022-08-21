import { Button } from 'antd';
import styled from 'styled-components';

const SignUpButton = () => {
  const handleClickReplace = () => {
    window.location.replace('/signup');
  };

  return <StyledButton onClick={handleClickReplace}>회원가입</StyledButton>;
};

export default SignUpButton;

const StyledButton = styled(Button)`
  width: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #145ddb;
  color: #145ddb;
  font-size: 20px;
  font-weight: bold;

  :hover {
    border: 1px solid #db7c3d;
    color: #db7c3d;
  }
`;
