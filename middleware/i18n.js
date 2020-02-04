const locales = ['zh', 'en', 'de']

export default function({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  // Get locale from params
  const defaultLocale = app.i18n.fallbackLocale
  const locale = params.lang || defaultLocale

  if (!locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  // Set locale
  // store.commit('SET_LANG', locale)
  app.i18n.locale = locale

  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.startsWith('/' + defaultLocale)
  ) {
    const to = route.fullPath.slice(defaultLocale.length + 1) || '/'
    return redirect(to)
  }
}
