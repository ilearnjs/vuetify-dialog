import dialog from './dialog'

export default {
  install(Vue) {
    Vue.prototype.$vDialog = dialog
  }
}
