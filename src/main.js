import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSnackbar from 'vue-snack';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'vue-snack/dist/vue-snack.min.css';

Vue.config.productionTip = false;

Vue.use(VueSnackbar, {
  position: 'bottom-right',
  time: 3000
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
