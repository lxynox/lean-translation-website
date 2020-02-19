<template>
  <el-select
    @change="onChange"
    :value="locales[$i18n.locale]"
    placeholder="Select"
    class="w-16"
  >
    <el-option
      v-for="(locale, index) in $i18n.availableLocales"
      :key="index"
      :label="locale"
      :value="locale"
      :class="{ 'text-gray-700': locale === $i18n.locale }"
      class="border-0 text-gray-500"
    >
      {{ locales[locale] }}
    </el-option>
  </el-select>
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
