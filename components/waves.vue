<template>
  <div class="relative">
    <div class="waves w-full absolute bg-cover h-32">
      <div @click="onClick" class="bounce flex flex-col items-center h-16">
        <i class="el-icon-d-arrow-right mt-12"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  background-color: #f3f4f5;
}

.waves {
  background-image: url('/waves.svg');
  top: -8rem; /* same as height of its container */
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
