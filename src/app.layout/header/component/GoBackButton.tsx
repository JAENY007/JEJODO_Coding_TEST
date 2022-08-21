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
      icon={<FontAwesomeIcon icon={faChevronLeft} />}
    ></BackButton>
  );
};

export default GoBackButton;

const BackButton = styled(Button)`
  color: #000;

  :hover {
    color: #14db6a;
  }
`;
