import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default (routes) => {
  const router = new Router({
    mode: 'history',
    routes,
  });

  return router;
};
