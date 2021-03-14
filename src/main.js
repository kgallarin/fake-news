import Vue from 'vue';
import { VueMasonryPlugin } from 'vue-masonry';
import router from '@/router';
import routes from '@/router/routes';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router: router(routes),
  render: (h) => h(App),
}).$mount('#app');
