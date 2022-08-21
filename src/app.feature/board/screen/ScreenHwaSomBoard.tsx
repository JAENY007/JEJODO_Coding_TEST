import styled from 'styled-components';
import HeaderImage from '../component/HeaderImage';
import TitleBox from '../component/TitleBox';

const ScreenHwaSomBoard = () => {
  return (
    <StyledWrapper>
      <HeaderImage />
      <TitleBox />
    </StyledWrapper>
  );
};

export default ScreenHwaSomBoard;

const StyledWrapper = styled.div`
  height: 100%;
`;
