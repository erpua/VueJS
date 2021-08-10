<template>
  <Container>
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
        class="apartments-list__item"
      />
    </div>
  </Container>

  <!--   <template>
  <Container>
    <slot name="title"></slot>
    <div class="apartments-list">
      -->

  <!-- scoped slot -->

  <!-- <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
    <slot name="description"></slot>
  </Container>
</template> -->

  <!--   <template>
  <div :id="$style.app">
    <ApartmentsList :items="apartments">
      <template v-slot:title>New title</template>
      <template v-slot:description
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        numquam id, velit quis doloribus similique quidem vero inventore
        explicabo fugit?</template
      >
    </ApartmentsList>
  </div>
</template>
 -->
</template>



<script>
import ApartmentsItem from "./ApartmentsItem";
import Container from "../shared/Container";
export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
    Container,
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
    margin-bottom: 30px;
  }
}
</style>