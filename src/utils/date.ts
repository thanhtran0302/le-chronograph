import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const getRandomDate = (from: number, to: number) =>
  format(new Date(from + Math.random() * (to - from)), 'yyyy-MM-dd', {
    locale: fr
  });
