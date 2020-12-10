import { GetServerSidePropsContext } from 'next';

export const isEmail = (email: string): boolean =>
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );

export const isProduction = (): boolean =>
  process.env.NODE_ENV === 'production';

export const generateUrlPath = (): string => {
  const prefix = process.env.URL_PREFIX || process.env.NEXT_PUBLIC_URL_PREFIX;
  return isProduction() && prefix ? prefix : '';
};

export const pagination = (
  totalPages: number,
  currentPage: number,
  toGo: number
): number => {
  if (
    (toGo < currentPage && toGo > 1) ||
    (toGo > currentPage && toGo <= totalPages)
  ) {
    return toGo;
  } else if (toGo >= totalPages) {
    return totalPages;
  }
  return 1;
};

export const serverDetectIsMobile = (ctx: GetServerSidePropsContext) =>
  (ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent).match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
