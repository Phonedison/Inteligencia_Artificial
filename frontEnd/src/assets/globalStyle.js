import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  body::-webkit-scrollbar {
    display: none;
}

  a {
    text-decoration: none;
    color: inherit;
  }
`;
