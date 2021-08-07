<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cdn.pixabay.com/photo/2021/07/16/18/28/czech-republic-6471576_960_720.jpg"
    />
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentsItem";
export default {
  name: "App",
  components: {
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
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
      },
    };
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
