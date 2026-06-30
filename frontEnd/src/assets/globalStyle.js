import styled, { createGlobalStyle } from "styled-components";

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

export const BackgroundImage = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-image: url(https://casimirodeabreu.rj.gov.br/wp-content/uploads/2025/09/8-curiosidades-sobre-o-vira-lata-caramelo.jpg);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.5;

  filter: blur(2px) grayscale(1);
`;
