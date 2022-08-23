import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';

type TProps = {
  setSearchKeyword: Function;
  setRecommendationSearch: Function;
};

const SearchBar: React.FC<TProps> = ({
  setSearchKeyword,
  setRecommendationSearch,
}) => {
  const [form] = Form.useForm();
  const [marginBottom, setMarginBottom] = useState('56px');

  const handleSearch = (value: any) => {
    setSearchKeyword(value);
  };

  const handleChangeKeyword = (event: any) => {
    setRecommendationSearch(event.target.value);
    event.target.value.length >= 1
      ? setMarginBottom('0')
      : setMarginBottom('56px');
  };

  return (
    <StyledForm form={form} style={{ marginBottom: `${marginBottom}` }}>
      <Form.Item name="keyword">
        <Input.Search
          onSearch={handleSearch}
          onChange={handleChangeKeyword}
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
    margin-bottom: 0;

    .ant-input-group {
      max-width: 320px;
    }
  }
`;
