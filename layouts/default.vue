<template>
  <container>
    <site-header></site-header>
    <sections></sections>
    <nuxt />
    <site-footer></site-footer>
  </container>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Container from '@/components/container.vue'
import Sections from '@/components/sections.vue'

export default {
  components: {
    siteHeader: Header,
    siteFooter: Footer,
    container: Container,
    sections: Sections
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
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.MenuList {
  list-style: none;
  display: flex;
}
</style>
