import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueI18n from 'vue-i18n';
// element-ui built-in lang
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN.js'
import zhLocale from '@/lang/zh';
import {getLanguage} from '@/utils/cookies';

// User defined lang

Vue.use(VueI18n);

const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

export const getLocale = () => {
  const cookiesLanguage = getLanguage();
  if (cookiesLanguage) {
    document.documentElement.lang = cookiesLanguage;
    return cookiesLanguage;
  }

  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      document.documentElement.lang = locale;
      return locale
    }
  }
  // Default language is zh
  return 'zh'
};

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n