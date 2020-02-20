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
      <h1
        class="pt-8 text-4xl lg:text-6xl flex-grow text-white text-center font-bold"
      >
        {{ $t('home.title') }}
      </h1>
      <el-image :src="'/header-image.png'" :fit="'contain'"> </el-image>
      <waves></waves>
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
  background-color: #00cba9;
}

.header h1 {
  margin-top: -0.5rem;
}
</style>
