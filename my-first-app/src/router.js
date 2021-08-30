/* for routing configurations */

import Foo from './pages/Foo';
import Bar from './pages/Bar';
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
];

/* create class VueRouter for const router */
/* Remove # => http://localhost:8080/#/foo =>  http://localhost:8080/foo adding  mode: 'history'  */
const router = new VueRouter({ routes, mode: 'history' });

export default router;
