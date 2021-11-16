<template>
  <!-- when we add events on input in parent component => event is going to work here as well -->
  <div class="wrapper-input">
    <!-- <input
      v-on="listeners" => all listeners inside of our component

       //property $attrs
       v-bind="$attrs" => in charge for all attributes that we passed to child component from parent component. Otherwise the root tag will give it after adding property inheritAttrs: false, but the tag input will not show it yet

      class="custom-input"
      // :class="!isValid && 'custom-input--error'" => if it's not valid, then add class-modificator => 'custom-input--error'

      :class="!isValid && 'custom-input--error'"
    /> -->

    <input
      v-on="$listeners"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
    };
  },
  inject: ['form'], //now in custom input has access to form
  /* inheritAttrs => for input taking passed atributes form parent element */
  inheritAttrs: false,
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
  //in method (property) watch, we are going to watch props: value => if we have changes in it => call method validate in order to check, if our input is valid or not
  /*  watch: {
    value(value) {
      this.validate(value);
      console.log('props value from method watch: => ', value);
    },
  }, */
  watch: {
    value() {
      this.validate();
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
  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  //for preventing of information leaking => using beforeDestroy
  beforeDestroy() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },
  methods: {
    //going to return true or false
    /*   validate(value) {
      this.isValid = this.rules.every((rule) => rule(value));
    }, */
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          //this.error = message;
          //sometimes message does not exist
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },
    reset() {
      this.$emit('input', '');
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
