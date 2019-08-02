<template>
  <div>
    <v-btn color="success" @click="printContent">Print Content</v-btn>
    <v-layout column wrap>
      <v-flex class="py-2">
        <Editor
          ref="editor"
          class="my-2"
          v-model="initHtml"
          api-key="jgcc419ogi1siiiatv6knxjgl73uvgnbsh2rdz9pi6z51et5"
          :init="{ plugins: 'wordcount' }"
        ></Editor>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// es modules
import Editor from '@tinymce/tinymce-vue'

import { initHtml } from '../mocks/html.mock'
import { initHtml2 } from '../mocks/html2.mock'

export default Vue.extend({
  components: {
    Editor
  },
  data: function() {
    return {
      initHtml: initHtml
    }
  },
  methods: {
    printContent() {
      const editor: any = this.$refs.editor
      editor.value
      console.log('TCL: printContent -> editor.value', editor.value)
    }
  }
})
</script>

<style></style>
