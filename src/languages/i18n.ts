import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import pt from './pt.json';

const initLanguage = () => {
  const language = RNLocalize.getLocales().find(l =>
    ['en', 'pt'].includes(l.languageCode),
  );
  return language ? language.languageCode : 'en';
};

export default i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: initLanguage(),
  resources: {
    en: en,
    pt: pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});
