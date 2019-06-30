import Vue from 'vue'
import Dialog from './Dialog.vue'

export default function(props) {
  const onOkFns = []
  const onCancelFns = []
  const api = {
    onOk(fn) {
      onOkFns.push(fn)
      return api
    },
    onCancel(fn) {
      onCancelFns.push(fn)
      return api
    }
  }

  const on = {
    ok: () => {
      onOkFns.forEach(fn => fn())
      vm.$refs.dialog.hide()
    },
    cancel: () => {
      onCancelFns.forEach(fn => fn())
      vm.$refs.dialog.hide()
    },
    hide: () => {
      // time to finish transition
      setTimeout(() => {
        vm.$destroy()
        vm.$el.remove()
        vm = null
      }, 300)
    }
  }

  let vm = new Vue({
    render(h) {
      return h(Dialog, {
        ref: 'dialog',
        props,
        on
      })
    },
    mounted() {
      this.$refs.dialog.showDialog = true
    }
  })

  document.body.querySelector('[data-app]').appendChild(vm.$mount().$el)

  return api
}
