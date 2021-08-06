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
      amountClicks: 0,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
