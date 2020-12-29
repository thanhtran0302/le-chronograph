const base = 16;
const generateFontSize = (ratio: number): string =>
  `${(1 / base) * (base * ratio)}rem`;

export default {
  64: generateFontSize(4),
  56: generateFontSize(3.5),
  48: generateFontSize(3),
  36: generateFontSize(2.25),
  32: generateFontSize(2),
  30: generateFontSize(1.875),
  28: generateFontSize(1.75),
  24: generateFontSize(1.5),
  20: generateFontSize(1.25),
  16: generateFontSize(1),
  14: generateFontSize(0.875),
  13: generateFontSize(0.8125),
  12: generateFontSize(0.75)
};
