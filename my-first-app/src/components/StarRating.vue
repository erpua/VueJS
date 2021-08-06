<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--colored"
    ></span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    raiting: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  &__fullfilled {
    display: inline-block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
  &--colored {
    background: url("/img/star-yellow.svg") center no-repeat;
  }
  &--outlined {
    background: url("/img/star-outlined.svg") center no-repeat;
  }
}
</style>