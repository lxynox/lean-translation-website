<template>
  <header class="header">
    <div class="h-screen flex flex-col">
      <!-- <div class="flex justify-center pt-4">
        <el-image
          :fit="'scale-down'"
          :src="'/logo.png'"
          class="h-16"
          alt="site logo"
        ></el-image>
      </div> -->
      <div class="pt-12 px-8">
        <el-image :src="'/header-image.svg'" :fit="'fill'"> </el-image>
      </div>
      <h1
        class="pt-4 text-4xl lg:text-6xl flex-grow text-white text-center font-black"
      >
        {{ $t('home.title') }}
      </h1>
      <waves :isWave="true"></waves>
    </div>
  </header>
</template>

<script>
import Waves from '@/components/waves.vue'

export default {
  components: { Waves }
}
</script>

<style scoped>
.header {
  background: #3f2b96; /* fallback for old browsers */
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header .el-image {
  height: 50vh;
}
</style>
