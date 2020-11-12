import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';
import paragraphs from '../constants/paragraphs';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Source Sans Pro, Qwigley, Roboto, sans-serif;
    color: ${colors.dark[100]};
    ${paragraphs.body1};
  }

  html {
    scroll-behavior: auto;
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
  a {
    text-decoration: none;
  }
  #__next {
    min-height: 100%;
    height: 100%;

    *, input, label, textarea {
    }
    h1, h2, h3, h4 {
      margin: 0;
      * {
        font-family: inherit;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
