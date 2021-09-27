<template>
  <!-- when we add events on input in parent component => event is going to work here as well -->
  <div class="wrapper-input">
    <input v-on="listeners" class="custom-input" />
    <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value(value) {
      this.validate(value);
      console.log('value from watch: => ', value);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        //rewrite the input event
        //emit input and return it's value
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
  methods: {
    //going to return true or false
    validate(value) {
      this.isValid = this.rules.every((rule) => rule(value));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-input {
  min-height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8 14px;

  &::placeholder {
    color: inherit;
  }
}
</style>
