<template>
  <header>
    <h1 class="text-6xl text-center p-4 bg-gray-100">{{ $t('home.title') }}</h1>
    <language-groups></language-groups>
    <hr />
    <nav class="nav mx-4 my-2">
      <div :style="{ margin: 'auto' }"></div>
      <ul class="menu">
        <li v-for="link in links" :key="link">
          <nuxt-link
            :to="location(link)"
            class="px-2 text-gray-500 hover:text-gray-700"
          >
            {{ $t('links.' + link) }}
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div style="height: 100vh; background-color: lightblue">
      block
    </div>
    <div id="about" style="height: 20vh; background-color: lightyellow">
      target
    </div>
  </header>
</template>

<script>
import LanguageGroups from '@/components/LanguageGroups'

const NAV_LINKS = ['home', 'about', 'contact']

export default {
  components: { LanguageGroups },
  data() {
    return {
      links: NAV_LINKS
    }
  },
  methods: {
    location(page) {
      // page = page !== 'home' ? `/${page}` : ''
      // return `/${this.$i18n.locale}${page}`
      return page === 'home' ? '/' : `/${page}`
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
}
</style>
