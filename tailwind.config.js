const { colors } = require('tailwindcss/defaultTheme')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)'
    }
  },
  variants: {},
  plugins: []
}
