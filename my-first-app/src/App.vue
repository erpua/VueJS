<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer';
import AppHeader from './components/Header';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },

  /*

   data() {
    return {
      text: '',
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  
  methods: {
    // filter(filters)
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) {
        return apartments;
      }

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },

    filterByPrice(apartments) {
      if (!this.filters.price) {
        return apartments;
      }

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  }, */
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Cantarell, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
