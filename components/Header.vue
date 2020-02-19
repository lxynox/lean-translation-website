<template>
  <header class="bg-white border border-gray-1 sticky top-0 z-10">
    <h1 class="text-center p-4 bg-gray-100">{{ $t('home.title') }}</h1>
    <hr />
    <nav class="nav mx-4 my-2">
      <div :style="{ margin: 'auto' }"></div>
      <ul class="menu">
        <li v-for="link in links" :key="link">
          <nuxt-link
            :to="location(link)"
            class="px-2 text-gray-500 hover:text-gray-700"
          >
            <span @click="onClick(link)">{{ $t('links.' + link) }}</span>
          </nuxt-link>
        </li>
        <language-select></language-select>
      </ul>
    </nav>
  </header>
</template>

<script>
import LanguageSelect from '@/components/language_select'

const NAV_LINKS = ['home', 'about', 'contact']

export default {
  components: { LanguageSelect },
  data() {
    return {
      links: NAV_LINKS
    }
  },
  methods: {
    onClick(link) {
      this.$root.$emit('scroll', link)
    },
    location(page) {
      let path = ''
      if (page !== 'home') path = '/' + page
      return `/${this.$i18n.locale}${path}`
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: baseline;
}

.menu {
  display: flex;
  align-items: center;
}

.nuxt-link-exact-active {
  @apply .text-gray-700;
}
</style>
