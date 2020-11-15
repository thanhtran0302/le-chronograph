import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const useMobileDevice = (): boolean =>
  useMediaQuery(`(max-width: 1023px)`);

export const useSmartphoneDevice = (): boolean =>
  useMediaQuery(`(max-width: 479px)`);

export const isTouchDevice = () =>
  !!(typeof window !== 'undefined' && 'ontouchstart' in window) ||
  !!(
    typeof navigator !== 'undefined' &&
    (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
  );
