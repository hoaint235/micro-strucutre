import i18next, { StringMap, TFunction, TOptions } from "i18next";
import enLang from "./en.json";
import vnLang from "./vn.json";

const resources = {
  en: {
    translation: enLang,
  },
  vn: {
    traslation: vnLang,
  },
};

let trans: TFunction;

export const I18n = {
  init() {
    i18next.createInstance(
      {
        fallbackLng: "vn",
        lng: "en",
        resources: resources,
      },
      (err, t) => {
        trans = t;
      }
    );
  },
  instance() {
    return i18next;
  },
};

export function t(key: string, options?: string | TOptions<StringMap>): string {
  return trans(key, options);
}

export async function changeLanguage(language: string) {
  await i18next.changeLanguage(language);
}
