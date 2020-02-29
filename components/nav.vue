<template>
  <nav
    v-show="show"
    v-sticky
    on-stick="onStick"
    sticky-z-index="1"
    class="shadow w-full bg-white animate"
  >
    <el-menu
      :active-text-color="'#6c63ff'"
      :default-active="defaultActive"
      @select="onChange"
      mode="horizontal"
    >
      <el-menu-item :index="link" v-for="link in NAV_LINKS" :key="link">
        <nuxt-link
          :to="location(link)"
          class="px-2 text-gray-500 text-base font-semibold hover:text-gray-700"
        >
          {{ $t('links.' + link) }}
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
const NAV_LINKS = ['about', 'service', 'contact']

export default {
  data() {
    return { show: false }
  },
  created() {
    this.NAV_LINKS = NAV_LINKS
    let path = this.$route.path
    const currentLocale = this.$i18n.locale
    if (currentLocale !== this.$i18n.fallbackLocale) path = path.slice(3)
    path = path.slice(1)
    this.defaultActive = (NAV_LINKS.includes(path) && path) || 'home'
  },
  methods: {
    onChange(link) {
      this.$root.$emit('scroll', link)
    },
    onStick({ sticked }) {
      if (sticked) {
        this.show = true
      } else {
        this.show = false
      }
    },
    location(page) {
      let path = ''
      if (page !== 'home') path = '/' + page
      return `/${this.$i18n.locale}${path}`
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply .text-gray-700;
}
</style>
