import { useQueryRecommendationKeyword } from 'app.feature/board/query/useQueryRecommendationKeyword';
import styled from 'styled-components';

type TProps = {
  recommendationSearch: string;
};

const RecommendationKeyword: React.FC<TProps> = ({ recommendationSearch }) => {
  const { data, isLoading, isError } = useQueryRecommendationKeyword();

  if (isError) return null;
  if (isLoading) return null;

  const keywordData = data.filter((item: any) =>
    item.searchkeyword.includes(recommendationSearch)
  );

  return (
    <StyledWrapper>
      <div className="recommendation-box">
        {keywordData.map((itemList: any) => {
          return (
            <div className="recommendation-keyword-list" key={itemList.id}>
              {itemList.searchkeyword}
            </div>
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
    top: 80px;
    padding: 10px 0;
  }

  @media screen and (max-width: 768px) {
    top: 140px;

    .recommendation-box {
      max-width: 320px;
    }
  }
`;
