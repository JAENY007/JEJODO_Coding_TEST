import styled from 'styled-components';
import { Tabs } from 'antd';
import FilterButton from './FilterButton';
import ContentSummaryCard from './ContentSummaryCard';

const BoardCategoryTabs = () => {
  const count = (
    <>
      <span>입주민들</span>
      <span className="count"> {157}</span>
    </>
  );

  return (
    <StyledTabs defaultActiveKey="1" tabBarExtraContent={<FilterButton />}>
      <Tabs.TabPane className="tabpane-title" tab={count} key="1">
        {<ContentSummaryCard />}
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

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;
