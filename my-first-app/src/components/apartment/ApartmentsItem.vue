<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgSrc" alt="" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">
          {{ descr }}
        </p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">UAH {{ price }}</div>
        <!-- router-link with path property -->
        <!-- <router-link to="apartment" class="apartments-item__link">
        </router-link> -->
        <!-- router link with { name : ... } property through v-bind-->
        <!--  <router-link
          v-bind:to="{ name: 'apartment' }"
          class="apartments-item__link"
        >
        </router-link> -->

        <!-- { id:id }
           <router-link
          :to="{ name: 'apartment', params: { id:  } }"
          class="apartments-item__link"
        >
        </router-link> -->

        <!--  params: { id: id }, -->

        <router-link
          :to="{
            name: 'apartment',
            params: { id: identificator },
            query: { name: 'John' },
          }"
          class="apartments-item__link"
        >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating.vue';

export default {
  name: 'ApartmentsItem',
  components: {
    StarRating,
  },
  props: {
    identificator: {
      type: Number,
      required: true,
    },
    descr: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
  methods: {
    log(index, event) {
      console.log(index);
      console.log(event);
    },
    handleLinkClick() {
      console.log('facebook clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  width: 33.33%;
  padding: 0 20px;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 15px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    max-width: 180px;
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    //1.4 line-height
    // 3 => quantity of lines
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
