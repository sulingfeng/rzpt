// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import axios from 'axios'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(elementUi)
// 路由跳转
Vue.prototype.$goRoute = function (login) {
  this.$router.push(login)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
