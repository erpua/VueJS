<template>
  <!-- when we add events on input in parent component => event is going to work here as well -->
  <input v-on="listeners" class="custom-input" />
</template>

<script>
export default {
  name: "CustomInput",
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        //rewrite the input event
        //emit input and return it's value
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/varables.scss";

.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8 14px;
}
</style>