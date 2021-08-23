<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
    </Container>

    <ApartmentsList :items="apartments">
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
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList';
import ApartmentsItem from './components/apartment/ApartmentsItem';
import apartments from './components/apartment/apartments';
import ApartmentsFilterForm from './components/apartment/ApartmentsFilterForm';
import Container from './components/shared/Container';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
  },
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
      this.apartments;
    },
  },
  methods: {
    /* filter(filters) {
      this.filters.city =
    }, */
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      return apartments.filter((apartment) => {
        return apartment.price === this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Cantarell, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
