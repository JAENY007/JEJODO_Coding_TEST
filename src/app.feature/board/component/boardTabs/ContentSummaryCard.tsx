import styled from 'styled-components';

const ContentSummaryCard = () => {
  return (
    <StyledWrapper>
      <div className="lt-content">
        <img
          className="profile-image"
          src="/images/png/board/profile_img.png"
          alt=""
        />
      </div>
      <div className="rt-content"></div>
    </StyledWrapper>
  );
};

export default ContentSummaryCard;

const StyledWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 17px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .lt-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .profile-image {
      width: 60px;
    }
  }
`;
