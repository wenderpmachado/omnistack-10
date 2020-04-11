import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
  }
  body, input, button {
    font-family: Roboto, sans-serif;
  }
`;
