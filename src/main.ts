import Vue from 'vue';
import VCalendar from 'v-calendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faEnvelope,
  faStar,
  faStarHalf,
  faCaretDown,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './directive';
import router from './router';
import store from './store';

library.add(faUser, faEnvelope, faStar, faStarHalf, faCaretDown, faSearch, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
