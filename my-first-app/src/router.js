/* for routing configurations */

import Foo from './pages/Foo';
import Bar from './pages/Bar';
import Homepage from './pages/Homepage';
import Apartment from './pages/Apartment';
/* import vue route class template */
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/foo',
    component: Foo,
  },
  {
    path: '/bar',
    component: Bar,
  },
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  /* {
    path: '/apartment',
    component: Apartment,
    name: 'apartment',

    in item case instead of apartment nothing will change
    cause now the property goes through v-bain:to={ name: 'apartment' } prop name
  }, */
  {
    path: '/item',
    component: Apartment,
    name: 'apartment',
  },
];

/* create class VueRouter for const router */
/* Remove # => http://localhost:8080/#/foo =>  http://localhost:8080/foo adding  mode: 'history'  */
const router = new VueRouter({ routes, mode: 'history' });

export default router;
