<template>
  <!-- when we add events on input in parent component => event is going to work here as well -->
  <div class="wrapper-input">
    <input
      v-on="listeners"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
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
    //validation rules
    rules: {
      type: Array,
      //if we need reference => then it is a function, not an object
      default: () => [],
    },
  },
  //in method watch we are going to watch props: value => if we have changes in value => we call method validate in order to check, if our input is valid or not
  watch: {
    value(value) {
      this.validate(value);
      console.log('props value from method watch: => ', value);
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

.wrapper-input {
  position: relative;
  display: inline-flex;
}

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

  //modificator
  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    widows: 100%;
    font-size: 12px;
    font-weight: bold;
    color: red;
    line-height: 1.3;
  }
}
</style>
