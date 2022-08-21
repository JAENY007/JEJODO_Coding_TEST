import styled from 'styled-components';

const TitleBox = () => {
  return (
    <StyledWrapper>
      <h1 className="board-title">화섬 아파트 지구家 입주민들</h1>
      <p className="description">
        화섬 아파트에 입주한 입주민들입니다.
        <br />
        같이 화성에 가는날을 기다리며 화목하게 지내봐요!
      </p>
    </StyledWrapper>
  );
};

export default TitleBox;

const StyledWrapper = styled.div`
  position: relative;
  top: 220px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  .board-title {
    color: #000;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .description {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: -0.05em;
  }

  @media screen and (max-width: 768px) {
    top: 160px;
    padding: 50px 25px;

    .board-title {
      font-size: 28px;
      letter-spacing: -0.05em;
    }
  }
`;
