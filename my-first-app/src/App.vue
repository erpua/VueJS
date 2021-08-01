<template>
  <div id="app">
    <!--     <h1>{{ amountClicks }}</h1> -->
    <h1>{{ title }}</h1>
    <!--     <Button v-on:click="amountClicks += 1">Click me</Button> -->
    <Button @click="increment">Click me</Button>
  </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Button,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
