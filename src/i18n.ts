import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const FRENCH_COMMON = require(`./locales/fr/common.json`);

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        ...FRENCH_COMMON
      }
    }
  },
  keySeparator: false,
  lng: 'fr',
  debug: process.env.NODE_ENV !== 'production'
});

export default i18n;
