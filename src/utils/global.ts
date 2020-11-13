import { PrismicAuthorText, PrismicBlogPostTitle } from '../interfaces/prismic';

export const getTextInPrismicArray = (
  array: PrismicAuthorText[] | PrismicBlogPostTitle[]
): string => {
  if (!array.length) { return ''; }

  return array[0].text;
};
