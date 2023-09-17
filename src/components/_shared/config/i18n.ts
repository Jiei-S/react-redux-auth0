import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "ja",
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "ja",
    debug: false,
    ns: ["default"],
    defaultNS: "default",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18n;
