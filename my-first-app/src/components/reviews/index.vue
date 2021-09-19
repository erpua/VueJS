<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Summary rating</h2>
      <div class="reviews__rating">
        <span>98 feedbacks</span>
        <Rating :rating="0" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in reviews"
      :key="review.author"
      :review="review"
    />
    <button class="reviews__show-more">Read more...</button>
  </section>
</template>

<script>
import ReviewsItem from './reviews-item';
import Rating from '../StarRating';

export default {
  name: 'Reviews',
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalRating() {
      return this.reviews.reduce((acc, review) => acc + review.rating);
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  margin: 20px 0 0 30px;
  padding: 0 2px;

  &__show-more {
    background: #e1efff;
    width: 100%;
    padding: 12px;
    cursor: pointer;
    border: none;
    font-family: inherit;
  }
}
</style>
