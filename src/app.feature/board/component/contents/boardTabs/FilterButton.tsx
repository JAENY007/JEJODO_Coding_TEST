import React from 'react';
import styled from 'styled-components';

type TProps = {
  isClicked: boolean;
  setIsClicked: Function;
};

const FilterButton: React.FC<TProps> = ({ isClicked, setIsClicked }) => {
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
