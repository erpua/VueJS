<template>
  <div>
    <Container> <h1>ApartmentPage</h1> </Container>
  </div>
</template>

<script>
import Container from '../components/shared/Container';
export default {
  name: 'ApartmentPage',
  components: {
    Container,
  },
  mounted() {
    console.log('this.$router =>', this.$router);
    console.log('this.$route =>', this.$route);
    console.log('this.$route.params.is =>', this.$route.params.id);
    console.log('this.$route.query.name =>', this.$route.query.name);
  },
};
</script>

<style lang="scss" scoped></style>
