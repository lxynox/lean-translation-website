<template>
  <div sticky-container>
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

export default {
  components: {
    siteHeader: Header,
    siteFooter: Footer,
    siteNav: Nav,
    sections: Sections,
    LanguageSelect
  },
  mounted() {
    this.$router.onReady(() => this.tryScroll(this.$route))
    this.$router.afterEach(this.tryScroll)
  },
  methods: {
    tryScroll: (to) => {
      const elm = document.getElementById(to.path.slice(1))
      if (elm && elm.scrollIntoView) {
        elm.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, '华文细黑', 'Microsoft YaHei', '微软雅黑',
    sans-serif;
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
