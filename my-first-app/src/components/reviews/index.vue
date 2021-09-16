<template>
  <section class="reviews">
    <ReviewsItem
      v-for="review in reviews"
      :key="review.author"
      :review="review"
    />
  </section>
</template>

<script>
import ReviewsItem from './reviews-item';
export default {
  name: 'Reviews',
  components: {
    ReviewsItem,
  },
  props: {
    review: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
