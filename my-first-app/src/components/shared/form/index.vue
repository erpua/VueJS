<template>
  <form class="form">
    <!-- for communicating form with inputs using provide-inject => allows difine proprties in parent component and inject them in child component -->
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  //provide: the key is form
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
