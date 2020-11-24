import fonts from './fonts';

export default {
  h1: `
    font-size: ${fonts[48]};
    font-weight: 400;
    line-height: 72px;
  `,
  h2: `
    font-size: ${fonts[32]};
    font-weight: 400;
    line-height: ${fonts[48]};
  `,
  h3: `
    font-size: ${fonts[24]};
    font-weight: 400;
    line-height: ${fonts[32]};
  `,
  h4: `
    font-size: ${fonts[20]};
    font-weight: 400;
    line-height: ${fonts[32]};
  `,
  subtitle: `
    font-size: ${fonts[16]};
    font-weight: 400;
    line-height: ${fonts[24]};
  `,
  subtitle_small: `
    font-size: ${fonts[14]};
    font-weight: 600
    line-height: ${fonts[20]};
  `,
  body1: `
    font-size: ${fonts[16]};
    font-weight: 300
    lien-height: ${fonts[24]};
  `,
  body2: `
    font-size: ${fonts[14]};
    font-weight: 400;
    line-height: ${fonts[20]};
  `
};
