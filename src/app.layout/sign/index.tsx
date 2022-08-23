import styled from 'styled-components';
import { Button, Form } from 'antd';
import SignForm from './SignForm';

export const ScreenLogin = () => {
  const [form] = Form.useForm();

  const handleClickFinish = () => {
    form.submit();
  };

  return (
    <StyledWrapper>
      <h1 className="title">제조도 들어가기</h1>
      <p className="description">
        제조도에 오신것을 환영합니다
        <br />
        로그인을 통해 제조도에 놀러오세요!
      </p>
      <SignForm form={form} />
      <Button className="submit-button" onClick={handleClickFinish}>
        로그인
      </Button>
    </StyledWrapper>
  );
};

export const ScreenSignUp = () => {
  const [form] = Form.useForm();

  const handleClickFinish = () => {
    form.submit();
  };

  return (
    <StyledWrapper>
      <h1 className="title">제조도 전입신고</h1>
      <p className="description">
        제조도에 오신것을 환영합니다
        <br />
        회원가입을 통해 전입신고를 해주세요!
      </p>
      <SignForm form={form} />
      <Button className="submit-button" onClick={handleClickFinish}>
        회원가입
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #828282;
    line-height: 20px;
  }

  .submit-button {
    border: none;
    border-radius: 20px;
    color: #fff;
    background: #1bc261;
    line-height: 20px;
    font-size: 20px;

    :hover {
      background: #3c28ec;
    }
  }
`;
