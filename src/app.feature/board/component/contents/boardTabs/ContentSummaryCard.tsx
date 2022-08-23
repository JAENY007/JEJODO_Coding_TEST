import styled from 'styled-components';

type TProps = {
  nickname: string;
  oname: string;
  buildingCount: number;
};

const ContentSummaryCard: React.FC<TProps> = ({
  nickname,
  oname,
  buildingCount,
}) => {
  return (
    <StyledWrapper>
      <div className="lt-content">
        <img
          className="profile-image"
          src="/images/png/board/profile_img.png"
          alt=""
        />
      </div>
      <div className="rt-content">
        <div className="nickname-and-apts">
          <span className="top-nickname">{nickname}</span>
          <span className="apts">지구家 아파트 {buildingCount}개</span>
        </div>
        <div className="user-ids">
          <span>
            <img
              className="nickname"
              src="/images/png/board/Group 1515.png"
              alt=""
            />
            {nickname}
          </span>
          <span>
            <img className="id" src="/images/png/board/Group 1516.png" alt="" />
            {oname}
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ContentSummaryCard;

const StyledWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 17px 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;

  .lt-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    .profile-image {
      width: 60px;
    }
  }

  .rt-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .nickname-and-apts {
      margin-bottom: 12px;
    }

    .nickname-and-apts,
    .user-ids {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > span {
        display: flex;
        justify-content: center;
        align-items: center;

        :first-child {
          margin-right: 12px;
        }

        .nickname,
        .id {
          width: 16px;
          margin-right: 4px;
          letter-spacing: -0.05em;
        }
      }
    }

    .user-ids {
      color: #999999;
      font-size: 12px;
      font-weight: 500;
      width: max-content;
    }

    .top-nickname {
      color: #000;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.05em;
    }

    .apts {
      color: #4498f2;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.05em;
    }
  }

  @media screen and (max-width: 768px) {
    .nickname-and-apts {
      flex-wrap: wrap;
    }
  }
`;
