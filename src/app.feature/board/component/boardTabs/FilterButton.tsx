import { useState } from 'react';
import styled from 'styled-components';

const FilterButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <StyledWrapper>
      {isClicked ? (
        <img
          className="filter-button"
          src="/images/png/icon/filter/active.png"
          alt=""
          onClick={handleClick}
        />
      ) : (
        <img
          className="filter-button"
          src="/images/png/icon/filter/inactive.png"
          alt=""
          onClick={handleClick}
        />
      )}
    </StyledWrapper>
  );
};

export default FilterButton;

const StyledWrapper = styled.div`
  .filter-button {
    width: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;
