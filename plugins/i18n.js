import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default (params) => {
  const { app } = params

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  const opts = {
    // locale: store.state.locale,
    fallbackLocale: `<%= options.defaultLocale %>`,
    messages: JSON.parse(`<%= options.messages %>`)
  }
  app.i18n = new VueI18n(opts)

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
