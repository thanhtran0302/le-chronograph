const base = 16;
const generateFontSize = (ratio: number): string =>
  `${(1 / base) * (base * ratio)}rem`;

export default {
  48: generateFontSize(3),
  32: generateFontSize(2),
  24: generateFontSize(1.5),
  20: generateFontSize(1.25),
  16: generateFontSize(1),
  14: generateFontSize(0.875),
  13: generateFontSize(0.8125),
  12: generateFontSize(0.75)
};
