<template>
  <section class="apartments-owner">
    <h1 class="apartments-owner__title">Owner data:</h1>
    <p class="apartments-owner__info">name: {{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApatrmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-owner {
  padding: 20px;
  background: #e1efff;
  font-weight: 400;
}
</style>
