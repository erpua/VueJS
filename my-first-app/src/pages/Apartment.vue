<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <AparmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container';
import apartments from '../components/apartment/apartments';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo';
import AparmentsOwner from '../components/apartment/ApartmentsOwner';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    AparmentsOwner,
    Reviews,
  },
  /* to choose spesific apartment through id use computed: */
  computed: {
    reviewsList() {
      return reviewsList;
    },
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

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
