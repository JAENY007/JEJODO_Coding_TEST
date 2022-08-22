import { Form, Input } from 'antd';
import styled from 'styled-components';

type TProps = {
  searchKeyword: string;
  setSearchKeyword: Function;
};

const SearchBar: React.FC<TProps> = ({ searchKeyword, setSearchKeyword }) => {
  const [form] = Form.useForm();

  const handleSearch = (value: any) => {
    console.log(value);
    setSearchKeyword(value);
  };

  return (
    <StyledForm form={form}>
      <Form.Item name="keyword">
        <Input.Search
          onSearch={handleSearch}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="검색어를 입력하세요!"
        />
      </Form.Item>
    </StyledForm>
  );
};

export default SearchBar;

const StyledForm = styled(Form)`
  position: relative;
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;

  .ant-form-item {
    margin-bottom: 0;

    .ant-input-group {
      width: 440px;
      border: 1px solid #000;
      border-radius: 20px;

      .ant-input {
        padding: 6px 24px;
        border: none;
        background: none;
        color: #000;
        font-weight: 500;

        ::placeholder {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
        }
        :focus {
          border: none;
          box-shadow: none;
        }
      }

      .ant-input-group-addon {
        background: none;

        .ant-input-search-button {
          border: none;
          background: none;
        }

        .anticon {
          color: #000;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    top: 160px;

    .ant-input-group {
      max-width: 320px;
    }
  }
`;
