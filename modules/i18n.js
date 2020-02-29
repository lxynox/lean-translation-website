import path from 'path'
import fse from 'fs-extra'

export default async function(moduleOptions) {
  const { defaultLocale } = moduleOptions
  const messages = {}

  // build locale messages from @/locales/*.json
  // and pass to initialize i18n plugin
  try {
    const localesDir = path.resolve(__dirname, '../locales')
    const files = await fse.readdir(localesDir)
    for (const file of files) {
      if (path.extname(file) === '.json') {
        const locale = file.slice(0, -5)
        messages[locale] = JSON.parse(
          await fse.readFile(path.join(localesDir, file), 'utf8')
        )
      }
    }
  } catch (e) {
    console.error(e)
  } finally {
    this.addPlugin({
      src: path.resolve(__dirname, '../plugins/i18n.js'),
      options: {
        defaultLocale,
        messages: JSON.stringify(messages)
      }
    })
  }

  /**
   * Re-enable this hook if locale change requires site reload
   * e.g., location.href = {new_locale}/path
   */
  // this.nuxt.hook('generate:extendRoutes', (routes) => {
  //   // This will be called before Nuxt generates your pages
  //   // extend default page routes with locale routes
  //   const locales = Object.keys(messages).filter((l) => l !== defaultLocale)
  //   const localeRoutes = []
  //   for (const locale of locales) {
  //     for (const route of routes) {
  //       localeRoutes.push({
  //         route: `/${locale}${route.route}`
  //       })
  //     }
  //   }
  //   Array.prototype.push.apply(routes, localeRoutes)
  // })
}
