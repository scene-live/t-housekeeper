import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faEnvelope,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faUser, faEnvelope, faStar, faStarHalf);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
