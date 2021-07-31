<template>
  <button v-bind:type="qwe">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    qwe: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

/*

required prop require presence, otherwise - error

 props: {
    qwe: {
      type: String,
      default: "button",
      required,
    },

*/