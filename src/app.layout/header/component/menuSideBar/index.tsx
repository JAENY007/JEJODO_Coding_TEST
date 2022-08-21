import { useState } from 'react';
import MenuButton from './MenuButton';
import MenuDrawer from './MenuDrawer';

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MenuButton visible={visible} setVisible={setVisible} />
      <MenuDrawer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default SideBar;
