import styled from 'styled-components';
import { Button } from 'antd';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon className="icon" icon={faX} />
        ) : (
          <FontAwesomeIcon className="icon" icon={faBars} />
        )
      }
    ></StyledButton>
  );
};

export default MenuButton;

const StyledButton = styled(Button)`
  color: #898989;

  .icon {
    width: 100%;
    height: 100%;
  }

  :focus,
  :hover {
    color: #14db6a;
  }
`;
