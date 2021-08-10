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
