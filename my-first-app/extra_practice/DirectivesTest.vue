<template>
  <!--  
v-if does not mark component due to condition; 
 while v-show just hide it   
   <div v-if="isVisible">
    <h1>Directives title</h1>
  </div> -->
  <!-- <div v-show="isVisible">
    <h1>Directives title</h1>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div> -->
  <!-- <div v-show="isVisible">
    <h1>Directives title</h1>
    <ul>
      <div v-for="fruit in fruits" :key="fruit">
        <li v-if="fruit === 'banana'">{{ fruit }}</li>
      </div>
    </ul>
  </div> -->

  <div v-show="isVisible">
    <h1>Directives title</h1>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>

    <h2>Cars</h2>

    <ul>
      <li v-for="car in cars" :key="car.color">{{ car.color }}</li>
    </ul>

    <h2>taking key property from cars collection</h2>

    <ul>
      <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivesTest",
  data() {
    return {
      isVisible: true,
      fruits: ["banana", "kiwi", "apple"],
      cars: {
        audi: {
          color: "red",
        },
        bmw: {
          color: "black",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>