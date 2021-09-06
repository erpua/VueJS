<template>
  <article class="apartment-main-info">
    <h1 class="apartment-main-info__item"></h1>
    <img src="" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description"></p>
  </article>
</template>

<script>
export default {
  name: 'ApartmentsMainInfo',
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
