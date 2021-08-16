import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en.json";
import vietnamese from "./vn.json";

const resources = {
  en: {
    translation: english,
  },
  vn: {
    translation: vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
