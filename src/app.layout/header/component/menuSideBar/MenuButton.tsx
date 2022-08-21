import { Button } from 'antd';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type TProps = {
  setVisible: Function;
};

const MenuButton: React.FC<TProps> = ({ setVisible }) => {
  const handleClickVisible = () => {
    setVisible(true);
  };

  return (
    <StyledButton
      onClick={handleClickVisible}
      type="link"
      size="large"
      icon={<FontAwesomeIcon icon={faBars} />}
    ></StyledButton>
  );
};

export default MenuButton;

const StyledButton = styled(Button)`
  color: #000;

  :hover {
    color: #14db6a;
  }
`;
