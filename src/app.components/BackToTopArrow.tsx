import styled from 'styled-components';
import { BackTop } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopArrow = () => {
  return (
    <>
      <BackTop>
        <StyledWrapper>
          <FontAwesomeIcon icon={faArrowUp} />
        </StyledWrapper>
      </BackTop>
    </>
  );
};

export default BackToTopArrow;

const StyledWrapper = styled.div`
  height: 100%;
  background: #050c4d;
  border-radius: 30px;
  color: #fff;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #ff9743;
  }
`;
