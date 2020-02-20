<template>
  <footer class="footer h-32 flex justify-center py-4 text-white">
    ⓒ Lean Translation Co. {{ currentYear }}
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: (function() {
        const today = new Date()
        return today.getFullYear()
      })()
    }
  }
}
</script>

<style scoped>
.footer {
  background: #141e30; /* fallback for old browsers */
  background: linear-gradient(to bottom, #141e30, #243b55);
}
</style>
