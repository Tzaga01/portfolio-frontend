import i18n from 'i18next';
import translationSV from './locales/sv.json';
import translationEN from './locales/en.json';
import {initReactI18next} from "react-i18next";

const resources = {
    sv: {
        translation: translationSV
    },
    en: {
        translation: translationEN
    }
};

i18n.use(initReactI18next).init({ resources, lng: 'sv', fallbackLng: 'sv', interpolation: { escapeValue: false } });

export default i18n;