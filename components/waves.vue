<template>
  <div class="relative waves z-0">
    <div class="w-full bottom-0 absolute">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,90.7C1120,53,1280,43,1360,37.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div
      @click="onClick"
      class="w-full absolute bounce flex flex-col items-center z-10"
    >
      <i class="el-icon-d-arrow-right mt-12"></i>
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
.waves .el-icon-d-arrow-right {
  font-size: 1.2rem;
  transform: rotate(90deg);
}

.waves .el-image {
  position: absolute;
}

.bounce {
  animation: bounce 1s ease-in-out 2s infinite alternate;
}

@keyframes bounce {
  from {
    bottom: 2.5rem;
  }
  to {
    /* transform: translateY(-1rem); */
    bottom: 1rem;
  }
}
</style>
