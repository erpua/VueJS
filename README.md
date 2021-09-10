# VueJS

- Alt + Shift + F => code format

# Vue routing

- npm i vue-router
- in main.js add VueRouter and Vue.use / also in class=> import VueRouter from 'vue-router' / Vue.use(VueRouter);

<!--

import './assets/scss/index.scss';

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  /*   router: router, */
  router,
}).$mount('#app');

 -->

- create file router.js for routing configurations (add ones)
- create folder pages with pages
- in App.vue add <router-view></router-view>
- make max-width for router to make clickable all component
