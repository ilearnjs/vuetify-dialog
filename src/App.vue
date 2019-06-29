<template>
  <v-app>
    <v-container text-xs-center>
      <v-layout align-center>
        <v-flex>
          <v-btn
            @click="showDialog"
            class="ma-4"
          >Click me</v-btn>
        </v-flex>
      </v-layout>
      <v-layout align-center>
        <v-flex>
          <code class="pa-4 text-xs-left">
            this.$vDialog({
              title: 'Confirm',
              message: 'Are you sure?'
            })
            .onOk(() => {
              console.log('Ok')
            })
            .onCancel(() => {
              console.log('Cancel')
            })
          </code>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showDialog() {
      this.$vDialog({
        title: 'Confirm',
        message: 'Are you sure?'
      })
        .onOk(() => {
          console.log('Ok')
        })
        .onCancel(() => {
          console.log('Cancel')
        })
    }
  }
}
</script>
