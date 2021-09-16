<template>
  <div class="reviews-heading">
    <Avatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__content">{{ author }}</span>
      <Rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import Rating from '../../StarRating.vue';
import Avatar from '../reviews-item/ReviewsAvatar';

export default {
  name: 'ReviewsHeading',
  components: {
    Rating,
    Avatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
