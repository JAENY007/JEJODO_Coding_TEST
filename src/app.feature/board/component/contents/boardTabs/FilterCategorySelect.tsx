import { Button } from 'antd';
import styled from 'styled-components';

const FilterCategorySelect = () => {
  const handleClickFilter = (value: any) => {
    console.log(value);
  };

  return (
    <StyledWrapper>
      <p className="filter-name">보유 아파트</p>
      <div>
        <Button
          className="select-filter-btn"
          type="text"
          value="?"
          onClick={(event) => handleClickFilter(event)}
        >
          전체
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="lt:5"
          onClick={handleClickFilter}
        >
          5개 이상
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="4"
          onClick={handleClickFilter}
        >
          4개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="3"
          onClick={handleClickFilter}
        >
          3개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="2"
          onClick={handleClickFilter}
        >
          2개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="1"
          onClick={handleClickFilter}
        >
          1개
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default FilterCategorySelect;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;

  .filter-name {
    color: #000;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin-right: 12px;
  }

  .select-filter-btn {
    margin: 0 12px;
    border: none;
    color: #999999;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.05em;

    :hover {
      cursor: pointer;
      color: #000;
      font-weight: 700;
    }

    :active,
    :focus,
    :visited {
      padding: 4px 12px;
      background: #000;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 20px;
    }
  }
`;
