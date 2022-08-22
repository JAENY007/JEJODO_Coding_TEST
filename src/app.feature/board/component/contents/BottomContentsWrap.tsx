import { useState } from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';
import BottomBlank from './BottomBlank';
import SearchBar from './SearchBar';

const BottomContentsWrap = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <StyledWrapper>
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <BoardList />
      <BottomBlank />
    </StyledWrapper>
  );
};

export default BottomContentsWrap;

const StyledWrapper = styled.div`
  height: 100%;
  background: #fff;
`;
