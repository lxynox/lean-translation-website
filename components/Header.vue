<template>
  <header class="header h-screen flex flex-col">
    <div class="h-75vh"></div>
    <waves></waves>
    <div class="relative content">
      <div class="absolute">
        <div class="pt-12 px-8">
          <el-image :src="'/header-image.svg'" :fit="'fill'"> </el-image>
        </div>
        <h1
          class="pt-4 text-4xl lg:text-6xl flex-grow text-gray-700 text-center font-black"
        >
          {{ $t('home.title') }}
        </h1>
      </div>
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

.header .waves {
  top: 25vh;
}

.h-75vh {
  height: 75vh;
}

.content {
  top: -75vh;
}
</style>
