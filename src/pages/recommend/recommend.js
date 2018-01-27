// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './recommend.vue'

import { Header, Tabbar, TabItem } from 'mint-ui'
import '../../styles/theme.less'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
