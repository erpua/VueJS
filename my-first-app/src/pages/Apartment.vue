<template>
  <main>
    <Container>
      <h1>ApartmentPage</h1>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container';
import apartments from '../components/apartment/apartments';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
  },
  /* to choose spesific apartment through id use computed: */
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log('this.$router =>', this.$router);
    console.log('this.$route =>', this.$route);
    console.log('this.$route.params.id =>', this.$route.params.id);
    console.log('this.$route.query.name =>', this.$route.query.name);
    console.log('this.apartment object => ', this.apartment);
  },
  /* mounted() {
    console.log('this.$router =>', this.$router);
    console.log('this.$route =>', this.$route);
    console.log('this.$route.params.is =>', this.$route.params.id);
    console.log('this.$route.query.name =>', this.$route.query.name);
  }, */
};
</script>

<style lang="scss" scoped></style>
