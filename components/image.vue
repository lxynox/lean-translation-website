<template>
  <el-image :src="src" :fit="fit" @click="clickHandler"></el-image>
</template>

<script>
/**
 * Undo <el-image> click handler
 * https://github.com/ElemeFE/element/blob/dev/packages/image/src/main.vue#L219-L224
 */
export default {
  props: ['src', 'fit'],
  methods: {
    clickHandler() {
      document.body.style.overflow = 'visible'
    }
  }
}
</script>
