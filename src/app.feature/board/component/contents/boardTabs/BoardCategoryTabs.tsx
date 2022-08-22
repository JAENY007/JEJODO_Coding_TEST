import styled from 'styled-components';
import { Button, Pagination, Tabs } from 'antd';
import FilterButton from './FilterButton';
import ContentSummaryCard from './ContentSummaryCard';
import { useQueryBoardList } from 'app.feature/board/query/useQueryBoardList';
import { useState } from 'react';
import FilterCategorySelect from './FilterCategorySelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BoardCategoryTabs = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [pageValue, setPageValue] = useState({ minValue: 0, maxValue: 7 });
  const { data: boardData, isLoading, isError } = useQueryBoardList();

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
        {isClicked ? <FilterCategorySelect /> : null}
        {boardData
          .slice(pageValue.minValue, pageValue.maxValue)
          .map((itemList: any) => {
            return (
              <ContentSummaryCard
                nickname={itemList.nickname}
                oname={itemList.oname}
                buildingCount={itemList.building_count}
              />
            );
          })}
        <div className="flexbox-pagination">
          <Button
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
            onClick={() => handleChangePage(1)}
          />
          <Pagination
            size="small"
            pageSize={8}
            total={boardData.length}
            onChange={handleChangePage}
          />
          <Button icon={<FontAwesomeIcon icon={faArrowRight} />} />
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

    .ant-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;
