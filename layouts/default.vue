<template>
  <div
    :class="{
      'lang-en': $i18n.locale === 'en',
      'lang-zh': $i18n.locale === 'zh'
    }"
    sticky-container
  >
    <site-header></site-header>
    <site-nav></site-nav>
    <sections></sections>
    <site-footer></site-footer>
    <language-select></language-select>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import Sections from '@/components/sections.vue'
import LanguageSelect from '@/components/language_select'

// Load ZCOOL KuaiLe typeface
require('typeface-zcool-kuaile')

export default {
  components: {
    siteHeader: Header,
    siteFooter: Footer,
    siteNav: Nav,
    sections: Sections,
    LanguageSelect
  },
  mounted() {
    this.$router.onReady(() => {
      let path = this.$route.path
      const currentLocale = this.$i18n.locale
      if (currentLocale !== this.$i18n.fallbackLocale) path = path.slice(3)
      path = path.slice(1)
      if (path) this.$root.$emit('scroll', path)
    })
  },
  methods: {}
}
</script>

<style>
html {
  font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans SC', '华文细黑',
    'Microsoft YaHei', '微软雅黑', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
