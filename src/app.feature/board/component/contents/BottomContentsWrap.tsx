import { useState } from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';
import BottomBlank from './BottomBlank';
import RecommendationKeyword from './RecommendationKeyword';
import SearchBar from './SearchBar';

const BottomContentsWrap = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [recommendationSearch, setRecommendationSearch] = useState('');

  return (
    <StyledWrapper>
      <SearchBar
        setSearchKeyword={setSearchKeyword}
        setRecommendationSearch={setRecommendationSearch}
      />
      {recommendationSearch && recommendationSearch.length ? (
        <RecommendationKeyword
          recommendationSearch={recommendationSearch}
          setSearchKeyword={setSearchKeyword}
        />
      ) : null}
      <BoardList searchKeyword={searchKeyword} />
      <BottomBlank />
    </StyledWrapper>
  );
};

export default BottomContentsWrap;

const StyledWrapper = styled.div`
  height: 100%;
  background: #fff;
`;
