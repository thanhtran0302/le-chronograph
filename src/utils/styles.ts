import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import paragraphs from '../constants/paragraphs';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Source Sans Pro, Qwigley, Roboto, sans-serif;
    color: ${colors.dark[100]};
    font-size: ${fonts[16]};
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
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      * {
        font-family: inherit;
      }
    }

    h1 {
      ${paragraphs.h1};
    }
    h2 {
      ${paragraphs.h2};
    }
    h3 {
      ${paragraphs.h3};
    }
    h4 {
      ${paragraphs.h4};
    }
  }

  a {
    color: ${colors.blue};
    font-weight: bold;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
