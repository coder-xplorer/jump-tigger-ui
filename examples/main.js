import Vue from 'vue'
import App from './App.vue'
import jtUi from '../packages'

Vue.config.productionTip = false

Vue.use(jtUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
