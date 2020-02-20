<template>
  <footer class="flex justify-center bg-gray-200 py-4">
    ⓒLean Translation Co. {{ currentYear }}
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
