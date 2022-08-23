import styled from 'styled-components';
import { Divider, Drawer } from 'antd';
import MenuList from './MenuList';
import SignButtonBox from '../sign';

type TProps = {
  visible: boolean;
  setVisible: Function;
};

const MenuDrawer: React.FC<TProps> = ({ visible, setVisible }) => {
  const handleCloseDrawer = () => {
    setVisible(false);
  };

  return (
    <StyledDrawer
      visible={visible}
      onClose={handleCloseDrawer}
      zIndex={98}
      closable={false}
    >
      <div className="menu-title">제조도 행선지</div>
      <SignButtonBox />
      <Divider style={{ borderTop: '1px solid #6e6e6e' }} />
      <MenuList setVisible={setVisible} />
    </StyledDrawer>
  );
};

export default MenuDrawer;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding-top: 0;
  }

  .menu-title {
    height: 50px;
    margin: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
  }
`;
