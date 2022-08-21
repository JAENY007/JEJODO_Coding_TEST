import { Button } from 'antd';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type TProps = {
  visible: boolean;
  setVisible: Function;
};

const MenuButton: React.FC<TProps> = ({ visible, setVisible }) => {
  const handleClickVisible = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <StyledButton
      onClick={handleClickVisible}
      type="link"
      size="large"
      icon={
        visible ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )
      }
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
