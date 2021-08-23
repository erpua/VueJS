<template>
  <form class="form" @submit.prevent="handleSubmit">
    <!-- input always returns string -->
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" placeholder="Price, from" />
    <SubmitButton class="form__submit" type="submit">
      Apartment choose
    </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect';
import CustomInput from '../shared/CustomInput';
import SubmitButton from '../shared/Button';

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: '',
      city: '',
    };
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Odessa',
        'Mariupol',
        'Melekino',
        'Donetsk',
        'Tokyo',
        'Volnovaha',
        'New York',
        'London',
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
