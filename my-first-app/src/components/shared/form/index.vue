<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  //provide => for having it is own
  provide: {
    form: this,
    methods: {
      registerInput() {},
      unRegisterInput() {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
