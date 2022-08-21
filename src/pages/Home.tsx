import BackToTopArrow from 'app.components/BackToTopArrow';
import styled from 'styled-components';

const Home = () => {
  return (
    <MainWrapper>
      <h1>폰트 확인</h1>
      <BackToTopArrow />
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
`;
