<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <StarRating :rating="4" />
  </div>
</template>

<script>
import StarRating from "./components/StarRating";

export default {
  name: "App",
  components: {
    StarRating,
  },
  data() {
    return {
      apartments,
      /*   apartment: {
        id: "1232123",
        title: " lkf slfk sdlk jslfk j",
        descr: "lkf lskf jlsakfj ñlask fjñslk fsalñkf jslñdk fñlsk fj",
        price: 2032,
        rating: 4.5,
        location: {
          city: "Tokyo",
        },
        owner: {
          name: "Elen",
          phone: "2323 2323 ",
          email: "email@gmail.com",
        },
      }, */
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountClicks += 1;
    },
  },
};

/* <template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <!-- two way data binding -->
    <!-- <input type="text" v-model="text" /> -->
    <!--  <input
      type="text"
      :v-value="text"
      @input="(event) => (text = event.target.value)"
    /> -->
    <!--  -->
    <CustomInput v-model="text" />
    <ApartmentsList :items="apartments">
      <!--   <template v-slot:title>New title</template> -->
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template> */
</script>

<style module>
#app {
  font-family: Cantarell, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
