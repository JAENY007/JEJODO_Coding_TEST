import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper>
      <p>COPYRIGHT 2022. JAENY, All rights reserved</p>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
