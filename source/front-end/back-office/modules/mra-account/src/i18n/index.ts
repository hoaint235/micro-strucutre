import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@mra/utility";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

window.addEventListener("CHANGE_LANGUAGE", (event) => {
  let {
    detail: { location },
  } = event as CustomEvent;
  i18n.changeLanguage(location);
});

export default i18n;
