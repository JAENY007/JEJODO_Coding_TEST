import styled from 'styled-components';
import GoBackButton from './component/GoBackButton';
import SideBar from './component/menuSideBar';

const Header = () => {
  return (
    <HeaderWrapper>
      <GoBackButton />
      <SideBar />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 99;

  .ant-btn {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    .ant-btn {
      width: 40px;
      height: 40px;
    }
  }
`;
