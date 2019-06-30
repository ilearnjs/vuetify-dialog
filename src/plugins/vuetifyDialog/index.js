import dialog from './dialog'
import './transition.css'

export default {
  install(Vue) {
    Vue.prototype.$vDialog = dialog
  }
}
