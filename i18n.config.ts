import { defaultLanguage, supportedLanguages } from "@/constants/languages"
import * as translationFiles from "./locales"

import i18n from "i18next"

import { initReactI18next } from "react-i18next"

const cookieMinutes = 60
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    load: "currentOnly",
    lowerCaseLng: true,
    preload: [defaultLanguage, "ar"],
    resources: {
      // 👇 Translations loaded from ./locales/**/*.json
      ...translationFiles
    }
  })

export default i18n