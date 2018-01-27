// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './orderOk.vue'

import { Header } from 'mint-ui'
import '../../styles/theme.less'
Vue.component(Header.name, Header)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
