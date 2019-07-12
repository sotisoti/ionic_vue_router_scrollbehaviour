import Vue from 'vue'
import App from './App.vue'
import router from './router'


import Ionic from '@ionic/vue';
Vue.use(Ionic);
import '@ionic/core/css/ionic.bundle.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')