<template>
  <Form @submit.prevent="handleSubmit">
    <CustomInput v-model="formData.email" name="email" />
    <CustomInput v-model="formData.password" name="password" />
    <Button type="bsubmit">Click me</Button>
  </Form>
</template>

<script>
import Form from '../shared/form';
import CustomInput from '../shared/CustomInput';
import Button from '../shared/Button';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../utils/validationRules';

export default {
  name: 'Login',
  components: {
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
  },
  methods: {
    handleSubmit() {
      console.log('this.formDATA =>', this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
