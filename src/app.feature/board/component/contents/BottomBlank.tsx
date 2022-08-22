import styled from 'styled-components';

const BottomBlank = () => {
  return <StyledWrapper></StyledWrapper>;
};

export default BottomBlank;

const StyledWrapper = styled.div`
  position: relative;
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  @media screen and (max-width: 768px) {
    top: 160px;
  }
`;
