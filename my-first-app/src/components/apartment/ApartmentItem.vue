<template>
  <div></div>
</template>

<script>
export default {
  name: 'ApartmentItem',
  props: {
    descr: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
