<template>
  <div class="fixed bottom-0 right-0">
    <nuxt-link
      v-for="(locale, index) in $i18n.availableLocales"
      :class="{
        'rounded-l': index === 0,
        'rounded-r': index === $i18n.availableLocales.length - 1,
        'nuxt-link-exact-active':
          locale === $i18n.fallbackLocale && $route.path === '/'
      }"
      :key="locale"
      :to="locale"
      class="px-4 py-2 bg-gray-300 hover:bg-gray-4000 text-gray-800"
    >
      {{ locale }}
    </nuxt-link>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply .bg-gray-400;
}
</style>
