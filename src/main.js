import Vue from 'vue'
import App from './App.vue'
// vue-router 路由
import router from './router'
// 图片滑动验证
import SlideVerify from 'vue-monoplasty-slide-verify'
// 接口路由
import * as https from './utils/api'

Vue.config.productionTip = false
Vue.prototype.$http = https

Vue.use(SlideVerify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
