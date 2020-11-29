import fonts from './fonts';
import spaces from './spaces';

export default {
  big_title: `
    font-family: Anton;
    font-size: ${fonts[64]};
    line-height: ${spaces[76]};
  `,
  h1: `
    font-family: Anton;
    font-size: ${fonts[48]};
    line-height: ${fonts[56]};
  `,
  h2: `
    font-family: Anton;
    font-size: ${fonts[32]};
    line-height: ${fonts[36]};
  `,
  h3: `
    font-family: Anton;
    font-size: ${fonts[24]};
    line-height: ${fonts[28]};
  `,
  h4: `
    font-family: Anton;
    font-size: ${fonts[20]};
    line-height: ${fonts[24]};
  `,
  subtitle: `
    font-family: Source Sans Pro;
    font-size: ${fonts[16]};
    font-weight: 400;
    line-height: ${fonts[24]};
  `,
  subtitle_small: `
    font-family: Source Sans Pro;
    font-size: ${fonts[14]};
    font-weight: 600;
    line-height: ${fonts[20]};
  `,
  body1: `
    font-family: Source Sans Pro;
    font-size: ${fonts[20]};
    font-weight: 300;
    line-height: ${fonts[32]};
  `,
  body2: `
    font-family: Source Sans Pro;
    font-size: ${fonts[14]};
    font-weight: 400;
    line-height: ${fonts[20]};
  `
};
