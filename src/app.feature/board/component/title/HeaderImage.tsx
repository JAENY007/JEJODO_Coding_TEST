import styled from 'styled-components';

const HeaderImage = () => {
  return (
    <StyledWrapper>
      <div className="header-background" />
      <img
        className="header-titleicon"
        src="/images/png/board/top_banner_char.png"
        alt=""
      />
    </StyledWrapper>
  );
};

export default HeaderImage;

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 300px;

  .header-background {
    position: fixed;
    top: 0;
    background-image: url(/images/png/board/top_banner_pattern.png);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: inherit;
    z-index: -1;
  }

  .header-titleicon {
    position: relative;
    bottom: 0;
    width: 100%;
    max-width: 560px;
  }

  @media screen and (max-width: 768px) {
    height: 240px;

    .header-titleicon {
      position: absolute;
      height: max-content;
      max-width: 360px;
    }
  }
`;
