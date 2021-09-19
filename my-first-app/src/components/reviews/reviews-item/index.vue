<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading';

export default {
  name: 'ReviewsItem',
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.reviews-item {
  border: 1px solid grey;
}
</style>
