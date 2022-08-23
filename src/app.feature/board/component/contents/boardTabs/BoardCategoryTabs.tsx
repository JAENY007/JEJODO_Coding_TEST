import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination, Tabs } from 'antd';
import {
  useQueryBoardList,
  useQueryFilteredBoardList,
  useQuerySearchedBoardList,
} from 'app.feature/board/query/useQueryBoardList';
import { customPagination } from '../../../module/customPagination';
import FilterButton from './FilterButton';
import ContentSummaryCard from './ContentSummaryCard';
import FilterCategorySelect from './FilterCategorySelect';

type TProps = {
  searchKeyword: string;
};

const BoardCategoryTabs: React.FC<TProps> = ({ searchKeyword }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [buildingCountFilter, setBuildingCountFilter] = useState('');
  const [pageValue, setPageValue] = useState({ minValue: 0, maxValue: 8 });

  const {
    data: boardData,
    isLoading,
    isError,
  } = searchKeyword && searchKeyword.length
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuerySearchedBoardList(searchKeyword)
    : buildingCountFilter.length >= 1
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useQueryFilteredBoardList(buildingCountFilter)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useQueryBoardList();

  if (isError) return null;
  if (isLoading) return null;

  const count = (
    <>
      <span>입주민들</span>
      <span className="count"> {boardData.length}</span>
    </>
  );

  const handleChangePage = (value: any) => {
    setPageValue({
      minValue: (value - 1) * 8,
      maxValue: value * 8,
    });
  };

  return (
    <StyledTabs
      defaultActiveKey="1"
      tabBarExtraContent={
        <FilterButton isClicked={isClicked} setIsClicked={setIsClicked} />
      }
    >
      <Tabs.TabPane className="tabpane-title" tab={count} key="1">
        {isClicked ? (
          <FilterCategorySelect
            setBuildingCountFilter={setBuildingCountFilter}
          />
        ) : null}
        {boardData
          .slice(pageValue.minValue, pageValue.maxValue)
          .map((itemList: any) => {
            return (
              <ContentSummaryCard
                key={itemList.id}
                nickname={itemList.nickname}
                oname={itemList.oname}
                buildingCount={itemList.buildingcount}
              />
            );
          })}
        <div className="flexbox-pagination">
          <Pagination
            size="small"
            pageSize={8}
            total={boardData.length}
            onChange={handleChangePage}
            itemRender={customPagination}
          />
        </div>
      </Tabs.TabPane>
    </StyledTabs>
  );
};
export default BoardCategoryTabs;

const StyledTabs = styled(Tabs)`
  width: 560px;

  .count {
    color: #4498f2;
  }
  .ant-tabs-nav {
    border-bottom: 1px solid #000;
    margin-bottom: 24px;
  }

  .ant-tabs-tab {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #000;
    color: #fff;
    padding: 4px 16px;
    font-size: 14px;

    .ant-tabs-tab-btn {
      color: #fff;
    }
  }
  .ant-tabs-ink-bar {
    background: none;
  }

  .flexbox-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 44px;

    .ant-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ant-pagination-item {
      > p {
        font-size: 12px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .ant-pagination-item-active {
      border: none;
      > p {
        color: #000;
      }
    }

    .ant-pagination-disabled {
      color: #999999;
      > div {
        border: 1px solid #999999;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;
