import { Button } from 'antd';
import styled from 'styled-components';

type TProps = {
  setBuildingCountFilter: Function;
};

const FilterCategorySelect: React.FC<TProps> = ({ setBuildingCountFilter }) => {
  const handleClickFilter = (event: any) => {
    setBuildingCountFilter(event.currentTarget.value);
  };

  return (
    <StyledWrapper>
      <p className="filter-name">보유 아파트</p>
      <div className="filter-select">
        <Button
          className="select-filter-btn"
          type="text"
          value=""
          onClick={handleClickFilter}
        >
          전체
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="_gte=5"
          onClick={handleClickFilter}
        >
          5개 이상
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="=4"
          onClick={handleClickFilter}
        >
          4개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="=3"
          onClick={handleClickFilter}
        >
          3개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="=2"
          onClick={handleClickFilter}
        >
          2개
        </Button>
        <Button
          className="select-filter-btn"
          type="text"
          value="=1"
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

  .filter-select {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .select-filter-btn {
    margin: 0 6px;
    padding: 4px 12px;
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
      background: #000;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .filter-name {
      margin-right: 0;
      margin-bottom: 12px;
    }
  }
`;
