<template>
  <form v-on="$listeners" class="form">
    <!-- for communicating form with inputs using provide-inject => allows difine proprties in parent component and inject them in child component -->
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  //provide: the key is form: this => this component
  // property provide must be a method, otherwise no access to this
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      //reactive property inputs: []
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unRegisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
    validate() {
      return this.inputs.every((input) => input.validate());
    },
    reset() {
      return this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
