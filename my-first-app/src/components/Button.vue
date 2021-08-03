<template>
  <button v-on="$listeners" v-bind:type="type" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

/* scoped only for this component */

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
}
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