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
      vm.$destroy()
      vm.$el.remove()
      vm = null
    }
  }

  const node = document.createElement('div')
  document.body.appendChild(node)

  let vm = new Vue({
    el: node,

    render(h) {
      return h(Dialog, {
        ref: 'dialog',
        props,
        on
      })
    },
    mounted() {
      this.$refs.dialog.show()
    }
  })

  return api
}
