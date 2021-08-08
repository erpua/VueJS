<template>
  <div class="apartments-list">
    <!--  <ApartmentsItem
      v-for="apartment in items"
      :key="apartment.id"
      :descr="apartment.descr"
      :rating="apartment.rating"
      :imgSrc="apartment.imgUrl"
      :price="apartment.price"
    /> -->
    <ApartmentsItem
      v-for="{ id, descr, rating, imgUrl, price } in items"
      :key="id"
      :descr="descr"
      :rating="rating"
      :imgSrc="imgUrl"
      :price="price"
    />
  </div>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem";
export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 15px;
  }
}
</style>