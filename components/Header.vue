<template>
  <header>
    <h1>{{ $t('home.title') }}</h1>
    <language-groups></language-groups>
    <hr />
    <nav class="nav mx-4 my-2">
      <div>Hello</div>
      <div :style="{ margin: 'auto' }"></div>
      <ul class="menu">
        <li v-for="item in items" :key="item">
          <nuxt-link
            :to="'/' + item"
            class="px-2 text-gray-500 hover:text-gray-700"
          >
            {{ item }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LanguageGroups from '@/components/LanguageGroups'

export default {
  components: { LanguageGroups },
  props: ['items']
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
