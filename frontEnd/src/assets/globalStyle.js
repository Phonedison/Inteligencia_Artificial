import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

html{
  font-size: 62.5%;
  line-height:1.5;
}

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
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
