import styled from 'styled-components';
import { Form, FormInstance, Input } from 'antd';

type TProps = {
  form: FormInstance;
};

const SignForm: React.FC<TProps> = ({ form }) => {
  const handleFinish = (value: any) => {
    console.log(value);
  };

  const handleFinishFailed = (value: any) => {
    console.log(value);
  };

  return (
    <StyledForm
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <div className="flexbox">
        <label className="form-label">이메일</label>
        <Form.Item name="email">
          <Input type="email" placeholder="이메일 주소를 입력해주세요!" />
        </Form.Item>
      </div>
      <div className="flexbox">
        <label className="form-label">비밀번호</label>
        <Form.Item name="password">
          <Input type="password" placeholder="비밀번호를 입력해주세요!" />
        </Form.Item>
      </div>
    </StyledForm>
  );
};

export default SignForm;

const StyledForm = styled(Form)`
  width: 36%;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  .flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .form-label {
      width: calc(20% - 10px);
      font-size: 20px;
      font-weight: 500;
    }

    .ant-form-item {
      width: calc(80% - 10px);
      margin-bottom: 0;

      .ant-input {
        border-radius: 6px;
        font-size: 18px;
        font-weight: 300;
        text-align: center;

        ::placeholder {
          font-weight: 600;
          color: #686868;
        }
      }
    }
  }
`;
