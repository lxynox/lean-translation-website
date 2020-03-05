<template>
  <header class="header h-screen flex flex-col">
    <div class="relative">
      <div class="absolute top-0 left-0 w-screen">
        <logo class="w-16 h-16 mx-auto"></logo>
      </div>
    </div>
    <waves></waves>
    <div class="relative">
      <div class="absolute w-full h-screen">
        <div class="max-w-screen-lg mx-auto">
          <div class="md:px-12 mt-32 px-2">
            <el-carousel
              :type="screen !== 'sm' && 'card'"
              interval="1000"
              height="320px"
              class="w-full"
            >
              <el-carousel-item
                v-for="image in bgImages"
                :key="image"
                :class="{ 'w-full': screen === 'sm' }"
              >
                <div
                  :style="{ backgroundImage: 'url(' + image + ')' }"
                  @click="onImageClick"
                  class="bg-center bg-cover w-full h-full"
                ></div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <h1
            class="lg:text-6xl mt-12 px-4 text-4xl text-gray-700 text-center font-black"
          >
            {{ $t('company') }}
          </h1>
        </div>
        <blockquote
          :class="{ complete: typingComplete }"
          class="blockquote px-6 pt-8"
        >
          <p class="uppercase w-full text-xl">
            <!-- <vue-typer
                @completed="onComplete"
                :repeat="'0'"
                text=""
              ></vue-typer> -->
            Words travel worlds. Translation do the driving
          </p>
          <cite class="block text-gray-600 text-right">- Anna Rusconi</cite>
        </blockquote>
      </div>
    </div>
  </header>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwindcss/defaultConfig'
import Waves from '@/components/waves.vue'
// import Image from '@/components/image.vue'

import Logo from '@/assets/images/website-logo.svg?inline'
import Carousel1 from '@/assets/images/carousel-1.jpg'
import Carousel2 from '@/assets/images/carousel-2.jpg'
import Carousel3 from '@/assets/images/carousel-3.jpg'
import Carousel4 from '@/assets/images/carousel-4.jpg'
// import { VueTyper } from 'vue-typer'

// FIX: Replace tailwind config with @/tailwind.config.js
// got following error:
// { TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
// https://github.com/tailwindcss/discuss/issues/50
const { theme } = resolveConfig(tailwindConfig)

export default {
  components: { Waves, Logo },
  data() {
    // typingComplete: false
    return {
      screen: 'sm'
    }
  },
  created() {
    this.bgImages = [Carousel1, Carousel2, Carousel3, Carousel4]
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const lgQuery = `screen and (min-width: ${theme.screens.lg})`
      const mdQuery = `screen and (min-width: ${theme.screens.md})`
      if (window.matchMedia(lgQuery).matches) {
        this.screen = 'lg'
      } else if (window.matchMedia(mdQuery).matches) {
        this.screen = 'md'
      } else {
        this.screen = 'sm'
      }
    },
    onComplete() {
      this.typingComplete = true
    },
    onImageClick() {
      document.body.style.overflow = 'visible'
    }
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
  top: 100vh;
}

.blockquote {
  transition: border-left 1s linear;
  max-width: 600px;
  margin: auto;
}

.blockquote.complete {
  max-width: 500px;
  border-left: 8px solid var(--color-primary);
}
</style>

<style>
.vue-typer {
  font-family: fantasy;
}

.vue-typer .typed {
  @apply .text-gray-600;
}

.vue-typer .custom.caret {
  display: none;
}

.el-carousel__container {
  @apply w-full;
}

.max-w-screen-lg {
  max-width: theme('screens.lg');
}
</style>
