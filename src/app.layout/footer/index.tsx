import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper>
      <p className="copyright">COPYRIGHT 2022. JAENY, All rights reserved</p>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.footer`
  position: fixed;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .copyright {
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    .copyright {
      font-size: 10px;
      padding: 6px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 4px;
    }
  }
`;
