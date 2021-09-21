<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Summary rating</h2>
      <div class="reviews__rating">
        <span>{{ amountOfreviews }} feedback(s)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ buttonText }}
    </button>
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
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfreviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Minimize'
        : 'Read more ...';
    },
  },
  /* methods: {
    toggleReviews() {
      this.reviewsLimit = this.reviews.length;
    },
  }, */
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
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
