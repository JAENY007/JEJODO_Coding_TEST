import styled from 'styled-components';
import { Button } from 'antd';
import { useQueryRecommendationKeyword } from 'app.feature/board/query/useQueryRecommendationKeyword';

type TProps = {
  recommendationSearch: string;
  setSearchKeyword: Function;
};

const RecommendationKeyword: React.FC<TProps> = ({
  recommendationSearch,
  setSearchKeyword,
}) => {
  const {
    data: recommendationKeyword,
    isLoading,
    isError,
  } = useQueryRecommendationKeyword();

  if (isError) return null;
  if (isLoading) return null;

  const keywordData = recommendationKeyword.filter((item: any) =>
    item.searchkeyword.includes(recommendationSearch)
  );

  const handleClickSearch = (event: any) => {
    setSearchKeyword(event.currentTarget.value);
  };

  return (
    <StyledWrapper>
      <div className="recommendation-box">
        {keywordData.map((itemList: any) => {
          return (
            <Button
              className="recommendation-keyword-list"
              key={itemList.id}
              onClick={handleClickSearch}
              value={itemList.searchkeyword}
            >
              {itemList.searchkeyword}
            </Button>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

export default RecommendationKeyword;

const StyledWrapper = styled.div`
  position: relative;
  top: 200px;
  height: 200px;
  width: 440px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  z-index: 2;

  .recommendation-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
    overflow: scroll;
    overflow-x: hidden;
  }

  .recommendation-keyword-list {
    position: relative;
    top: 60px;
    padding: 10px 0;
    width: 100%;
    color: #000;
    letter-spacing: -0.05em;
    border: none;
    text-align: left;
    display: flex;
    align-items: center;
    > span {
      font-size: 14px;
      font-weight: 500;
    }

    :hover {
      background: #eeeeee;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
    top: 140px;
  }
`;
