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
const router = new VueRouter({ routes, mode: 'history' });

export default router;
