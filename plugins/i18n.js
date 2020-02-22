import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default (params) => {
  const { app, isDev } = params

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  const opts = {
    // locale: store.state.locale,
    locale: `<%= options.defaultLocale %>`,
    fallbackLocale: `<%= options.defaultLocale %>`,
    messages: JSON.parse(`<%= options.messages %>`)
  }

  if (isDev) {
    opts.messages = {
      en: require('@/locales/en.json'),
      fr: require('@/locales/fr.json'),
      de: require('@/locales/de.json'),
      zh: require('@/locales/zh.json')
    }
  }

  app.i18n = new VueI18n(opts)

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
