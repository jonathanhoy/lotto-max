import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }
    * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }
    body {
        margin: 0;
    }
`;

export default GlobalStyle;