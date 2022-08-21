import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Drawer } from 'antd';
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
    <Drawer
      visible={visible}
      onClose={handleCloseDrawer}
      closeIcon={<FontAwesomeIcon icon={faX} />}
    >
      <SignButtonBox />
      <Divider style={{ borderTop: '1px solid #6e6e6e' }} />
    </Drawer>
  );
};

export default MenuDrawer;
