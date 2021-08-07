  <!-- from app

<template>
  <div :id="$style.app">
    <h1>{{ amountClicks }}</h1> 
    <h1>{{ title }}</h1>
       <Button v-on:click="amountClicks += 1">Click me</Button> 
        <Button @click="increment" outlined>Click me</Button> 
    <DirectivesTest />
    <StarRating />
  </div>
</template>  -->

<template>
  <!--  <button
    v-on="$listeners"
    v-bind:type="type"
    class="btn btn--outlined"
    style="opacity: 0.5"
  >
    <slot></slot>
  </button> -->
  <!-- <button v-on="$listeners" v-bind:type="type" class="btn btn--outlined">
    <slot></slot>
  </button> -->
  <!--   <button
    v-on="$listeners"
    v-bind:type="type"
    v-bind:class="['btn', 'btn--outlined']"
  >
    <slot></slot>
  </button> -->
  <!--  <button
    v-on="$listeners"
    v-bind:type="type"
    :class="['btn', 'btn--outlined']"
  >
    <slot></slot>
  </button> -->
  <button
    v-on="$listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

/* scoped only for this component */

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: #ff662d;
  }
}
</style>

/*

required prop require presence, otherwise - error

 props: {
    qwe: {
      type: String,
      default: "button",
      required,
    },

*/