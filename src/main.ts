import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// styles
import './styles/main.scss'

// vconsole
import VConsole from 'vconsole'
// if (process.env.NODE_ENV === 'production') {
var vConsole = new VConsole()
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
