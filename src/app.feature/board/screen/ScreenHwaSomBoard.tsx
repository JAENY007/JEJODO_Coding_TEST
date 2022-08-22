import styled from 'styled-components';
import BottomContentsWrap from '../component/contents/BottomContentsWrap';
import HeaderImage from '../component/title/HeaderImage';
import TitleBox from '../component/title/TitleBox';

const ScreenHwaSomBoard = () => {
  return (
    <StyledWrapper>
      <HeaderImage />
      <TitleBox />
      <BottomContentsWrap />
    </StyledWrapper>
  );
};

export default ScreenHwaSomBoard;

const StyledWrapper = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
  }
`;
