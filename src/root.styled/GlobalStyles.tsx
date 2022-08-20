import 'antd/dist/antd.variable.min.css';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  
  ${reset}
  
  html { 
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
