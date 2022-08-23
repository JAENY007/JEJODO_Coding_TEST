import styled from 'styled-components';
import BoardCategoryTabs from './boardTabs/BoardCategoryTabs';

type TProps = {
  searchKeyword: string;
};

const BoardList: React.FC<TProps> = ({ searchKeyword }) => {
  return (
    <StyledWrapper>
      <BoardCategoryTabs searchKeyword={searchKeyword} />
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
