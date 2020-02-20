<template>
  <div class="relative">
    <div
      :class="{
        waves: isWave,
        triangle: !isWave,
        'triangle-gray': !isWave && color === 'gray'
      }"
      class="w-full absolute bg-cover h-32 md:h-64"
    >
      <div
        v-if="isWave"
        @click="onClick"
        class="bounce flex flex-col items-center h-16"
      >
        <i class="el-icon-d-arrow-right mt-12"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isWave: Boolean,
    color: {
      type: String,
      default: 'white'
    }
  },
  methods: {
    onClick() {
      if ('scrollTo' in window) {
        const top = window.innerHeight || document.documentElement.clientHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.bg-gray {
  background-color: var(--color-bg-gray);
}

.waves {
  background-image: url('/waves.svg');
  top: -8rem; /* same as height of its container */
}

.triangle,
.triangle-gray {
  top: 0; /* same as height of its container */
}

.triangle {
  background-image: url('/triangle.svg');
}

.triangle-gray {
  background-image: url('/triangle-gray.svg');
  top: 0; /* same as height of its container */
}

.waves .el-icon-d-arrow-right {
  font-size: 1.2rem;
  transform: rotate(90deg);
}

.bounce {
  animation: bounce 1s linear 1s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(1rem);
  }
  to {
    transform: translateY(2rem);
  }
}
</style>
