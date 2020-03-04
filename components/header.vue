<template>
  <header class="header h-screen flex flex-col">
    <div class="relative">
      <logo class="w-16 h-16 m-2 absolute top-0 left-0"></logo>
    </div>
    <waves></waves>
    <div class="relative content">
      <div
        class="absolute w-full h-screen lg:flex lg:flex-col lg:flex-wrap lg:justify-center"
      >
        <div class="pt-20 px-8 lg:w-1/2 lg:h-screen flex items-center">
          <el-carousel
            type="card"
            indicator-position="outside"
            height="320px"
            class="w-full"
          >
            <el-carousel-item v-for="image in bgImages" :key="image">
              <div
                :style="{ backgroundImage: 'url(' + image + ')' }"
                @click="onImageClick"
                class="bg-center bg-cover h-full"
              ></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <h1
          class="lg:w-1/3 lg:text-left lg:text-6xl lg:text-left px-4 text-4xl text-gray-700 text-center font-black"
        >
          {{ $t('company') }}
        </h1>
        <media :query="{ minWidth: 768 }">
          <blockquote
            :class="{ complete: typingComplete }"
            class="lg:w-1/2 blockquote px-6 pt-8"
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
        </media>
      </div>
    </div>
  </header>
</template>

<script>
import Media from 'vue-media'
import Waves from '@/components/waves.vue'
// import Image from '@/components/image.vue'

import Logo from '@/assets/images/website-logo.svg?inline'
import Carousel1 from '@/assets/images/carousel-1.jpg'
import Carousel2 from '@/assets/images/carousel-2.jpg'
import Carousel3 from '@/assets/images/carousel-3.jpg'
import Carousel4 from '@/assets/images/carousel-4.jpg'
// import { VueTyper } from 'vue-typer'

export default {
  components: { Waves, Media, Logo },
  data() {
    return { typingComplete: false }
  },
  created() {
    this.bgImages = [Carousel1, Carousel2, Carousel3, Carousel4]
  },
  methods: {
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

@media (min-width: 1024px) {
  .blockquote {
    margin: 0;
  }
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
</style>
