import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type TProps = {
  setVisible: Function;
};

const MenuList: React.FC<TProps> = ({ setVisible }) => {
  const navigate = useNavigate();

  const handleClickReplace = (linkAddress: string) => {
    navigate(linkAddress);
    setVisible(false);
  };

  return (
    <StyledWrapper>
      <p className="link" onClick={() => handleClickReplace('/')}>
        화섬 아파트 입주민들
      </p>
    </StyledWrapper>
  );
};

export default MenuList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .link {
    color: #000;
    text-decoration: none;
    font-weight: bold;

    :hover {
      cursor: pointer;
      color: #2377f5;
    }
  }
`;
