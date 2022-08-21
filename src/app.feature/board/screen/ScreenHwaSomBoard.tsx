import styled from 'styled-components';
import BoardList from '../component/BoardList';
import HeaderImage from '../component/HeaderImage';
import PaginationBoardList from '../component/PaginationBoardList';
import SearchBar from '../component/SearchBar';
import TitleBox from '../component/TitleBox';

const ScreenHwaSomBoard = () => {
  return (
    <StyledWrapper>
      <HeaderImage />
      <TitleBox />
      <div className="background-white">
        <SearchBar />
        <BoardList />
        <PaginationBoardList />
      </div>
    </StyledWrapper>
  );
};

export default ScreenHwaSomBoard;

const StyledWrapper = styled.div`
  height: 100%;

  .background-white {
    height: 100%;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
  }
`;
