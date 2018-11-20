import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import router from "./router/index";
import VueLazyload from 'vue-lazyload'
import store from './store'
// import axios from 'axios';
import api from '@/utils/api'


// Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/logo.png'),
  loading: require('@/assets/logo.png'),
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


// api
Vue.prototype.portApi = api
