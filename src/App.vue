<template>
  <v-app></v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$vDialog({
      title: 'Confirm',
      message: 'Are you sure?'
    })
      .onOk(() => console.log('Ok'))
      .onCancel(() => console.log('Cancel'))
  }
}
</script>
