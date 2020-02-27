import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faEnvelope,
  faStar,
  faStarHalf,
  faCaretDown,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './directive';
import router from './router';
import store from './store';

library.add(faUser, faEnvelope, faStar, faStarHalf, faCaretDown, faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
