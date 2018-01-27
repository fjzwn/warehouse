// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './preselect.vue'

import { Button, Header, DatetimePicker, Picker, Popup, Radio, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import '../../styles/theme.less'
Vue.component(Radio.name, Radio)
Vue.component(Popup.name, Popup)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Picker.name, Picker)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
