import styled from 'styled-components';
import BoardCategoryTabs from './boardTabs/BoardCategoryTabs';

const BoardList = () => {
  return (
    <StyledWrapper>
      <BoardCategoryTabs />
    </StyledWrapper>
  );
};

export default BoardList;

const StyledWrapper = styled.div`
  position: relative;
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px;

  @media screen and (max-width: 768px) {
    top: 160px;
  }
`;
