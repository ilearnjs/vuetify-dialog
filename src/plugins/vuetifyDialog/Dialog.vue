<template>
  <v-dialog
    :value="showDialog"
    @input="cancel"
    max-width="300"
    ref="dialog"
  >
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="cancel">{{ cancelBtnText }}</v-btn>
        <v-btn @click="ok">{{ okBtnText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    title: String,
    message: String,
    okBtnText: {
      type: String,
      default: 'Ok'
    },
    cancelBtnText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    show() {
      this.showDialog = true
    },
    hide() {
      this.showDialog = false
      this.$emit('hide')
    },
    ok() {
      this.$emit('ok')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
