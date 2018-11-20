import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import router from "./router/index";
// import store from "./store";
import axios from 'axios';


Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
