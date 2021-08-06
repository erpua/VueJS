<template>
  <div :id="$style.app">
    <!--     <h1>{{ amountClicks }}</h1> -->
    <h1>{{ title }}</h1>
    <!--     <Button v-on:click="amountClicks += 1">Click me</Button> -->
    <Button @click="increment" outlined>Click me</Button>
    <DirectivesTest />
    <StarRating />
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import DirectivesTest from "./components/DirectivesTest";
import StarRating from "./components/StarRating";

export default {
  name: "App",
  components: {
    Button,
    DirectivesTest,
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
