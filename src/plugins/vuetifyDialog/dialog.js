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

  const node = document.createElement('div')
  document.body.appendChild(node)

  let vm = new Vue({
    el: node,

    render(h) {
      return h(Dialog, {
        ref: 'dialog',
        props: props,
        on: {
          ok: () => {
            onOkFns.forEach(fn => fn())
            this.$refs.dialog.hide()
          },
          cancel: () => {
            onCancelFns.forEach(fn => fn())
            this.$refs.dialog.hide()
          },
          hide: () => {
            vm.$destroy()
            vm.$el.remove()
            vm = null
          }
        }
      })
    },
    mounted() {
      this.$refs.dialog.show()
    }
  })

  return api
}
