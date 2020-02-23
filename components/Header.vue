<template>
  <header class="header h-screen flex flex-col">
    <div class="h-75vh"></div>
    <waves></waves>
    <div class="relative content">
      <div class="absolute w-full">
        <div class="pt-12 px-8">
          <el-carousel indicator-position="outside" height="50vh">
            <el-carousel-item v-for="image in bgImages" :key="image">
              <el-image :src="image" fit="fill"></el-image>
            </el-carousel-item>
          </el-carousel>
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

const BG_IMAGES = [
  '/header-image-1.svg',
  '/header-image-3.svg',
  '/header-image-4.svg'
]

export default {
  components: { Waves },
  created() {
    this.bgImages = BG_IMAGES
  }
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
