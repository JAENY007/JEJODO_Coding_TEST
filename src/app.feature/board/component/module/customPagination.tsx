import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import styled from 'styled-components';

export const customPagination = (
  _: number,
  type: string,
  originalElement: React.ReactNode
) => {
  if (type === 'prev') {
    return (
      <StyledButtonBox>
        <FontAwesomeIcon icon={faCaretLeft} />
      </StyledButtonBox>
    );
  }
  if (type === 'next') {
    return (
      <StyledButtonBox>
        <FontAwesomeIcon icon={faCaretRight} />
      </StyledButtonBox>
    );
  }
  if (type === 'page') {
    return <p>{_}</p>;
  }
  return originalElement;
};

const StyledButtonBox = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
