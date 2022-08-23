import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const GoBackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <BackButton
      type="link"
      onClick={onClick}
      size="large"
      icon={<FontAwesomeIcon className="icon" icon={faChevronLeft} />}
    ></BackButton>
  );
};

export default GoBackButton;

const BackButton = styled(Button)`
  color: #898989;

  .icon {
    width: 100%;
    height: 100%;
  }

  :hover {
    color: #14db6a;
  }
`;
