<template>
  <div class="fixed top-0 right-0 p-4 z-10">
    <el-dropdown @command="onChange" :hide-on-click="true">
      <span class="el-dropdown-link text-gray-500">
        {{ getDropdownItemText($i18n.locale) }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(locale, index) in $i18n.availableLocales"
          :command="locale"
          :key="index"
        >
          {{ getDropdownItemText(locale) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locales: {
        en: '🇺🇸',
        zh: '🇨🇳',
        fr: '🇫🇷',
        de: '🇩🇪'
      }
    }
  },
  methods: {
    getDropdownItemText(locale) {
      return `${this.locales[locale]} ${this.$t('lang.' + locale)}`
    },
    onChange(locale) {
      let path = this.$route.path
      const currentLocale = this.$i18n.locale
      if (currentLocale !== this.$i18n.fallbackLocale) path = path.slice(3)
      this.$router.push(`/${locale}${path}`)
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply .bg-gray-400;
}
</style>

<style>
.nav .el-input__inner {
  border: none;
}
</style>
