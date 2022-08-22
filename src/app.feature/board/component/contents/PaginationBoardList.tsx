import { Pagination } from 'antd';
import styled from 'styled-components';

const PaginationBoardList = () => {
  return (
    <StyledWrapper>
      <Pagination />
    </StyledWrapper>
  );
};

export default PaginationBoardList;

const StyledWrapper = styled.div`
  position: relative;
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    top: 160px;
  }
`;
