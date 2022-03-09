import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router/index'
import VueRouter from "vue-router";
import store from "@/store/store";
import Cart from "@/shopping-cart-components/Cart";


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.prototype.$cart = new Cart();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
