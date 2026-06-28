import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../locales/ru.json';
import ar from '../locales/ar.json';
import fr from '../locales/fr.json';
import ruPages from '../locales/content/ru-pages.json';
import arPages from '../locales/content/ar-pages.json';
import frPages from '../locales/content/fr-pages.json';

import ruSahabah from '../locales/content/ru-sahabah.json';
import arSahabah from '../locales/content/ar-sahabah.json';
import frSahabah from '../locales/content/fr-sahabah.json';

const mergeLocale = (base, pagesContent, sahabahContent) => ({
  ...base,
  pages: pagesContent.pages,
  sahabahPage: {
    ...base.sahabahPage,
    ...sahabahContent.sahabahPage,
    caliphs: {
      ...base.sahabahPage?.caliphs,
      ...sahabahContent.sahabahPage?.caliphs,
    },
  },
});

export const RTL_LANGUAGES = ['ar'];

export const applyDocumentLanguage = (language) => {
  const lang = language?.split('-')[0] ?? 'ru';
  const dir = RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: mergeLocale(ru, ruPages, ruSahabah) },
      ar: { translation: mergeLocale(ar, arPages, arSahabah) },
      fr: { translation: mergeLocale(fr, frPages, frSahabah) },
    },
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'ar', 'fr'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

applyDocumentLanguage(i18n.language);

i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;
