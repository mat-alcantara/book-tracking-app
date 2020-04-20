import { createGlobalStyle } from 'styled-components';

// Create a global style
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #fafafa;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
}


`;
