<template>
  <div>
    <v-btn color="success" @click="printContent">Print Content</v-btn>
    <v-layout column wrap>
      <v-flex class="py-2">
        <Editor
          ref="editor"
          class="my-2"
          v-model="initHtml"
          :init="init"
        ></Editor>
        <!-- <textarea name="" id="editor" cols="30" rows="10"></textarea> -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
//// <reference path="../untyped-modules.d.ts" />

import Vue from "vue";
// es modules
import Editor from "@tinymce/tinymce-vue";

// Import TinyMCE
// import tinymce from "tinymce/tinymce";
import "tinymce/tinymce";

// A theme is also required
import "tinymce/themes/silver";

// Any plugins you want to use has to be imported
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/image";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/contextmenu";

import { initHtml } from "../mocks/html.mock";
import { initHtml2 } from "../mocks/html2.mock";

export default Vue.extend({
  components: {
    Editor
  },
  data: function() {
    return {
      initHtml: initHtml,
      init: {
        language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径
        language: "zh_CN", //语言
        plugins: "wordcount image imagetools",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: ["/tinymce/skins/content/default/content.min.css"],
        height: 500,
        toolbar: ["image", "basicDateButton"],
        // imagetools_toolbar:
        //   "rotateleft rotateright | flipv fliph | editimage imageoptions",
        setup: function(editor) {
          editor.ui.registry.addContextToolbar("imageEdit", {
            predicate: function(node) {
              return node.nodeName.toLowerCase() === "img";
            },
            // items: "rotateleft rotateright | flipv fliph",
            items: "myButton",
            position: "node",
            scope: "node"
          });

          editor.ui.registry.addContextToolbar("textSelection", {
            predicate: function(node) {
              return !editor.selection.isCollapsed();
            },
            items: "bold italic | blockquote",
            position: "selection",
            scope: "node"
          });

          // custom button
          editor.ui.registry.addButton("myButton", {
            icon: "rotate-left",
            tooltip: "myButton tooltip",
            onAction: function(_) {
              console.log("myButtonxxx");
            }
          });
        }
      }
    };
  },
  mounted() {
    // tinymce.init(this.init);
  },
  methods: {
    printContent() {
      const editor: any = this.$refs.editor;
      editor.value;
      console.log("TCL: printContent -> editor.value", editor.value);
    }
  }
});
</script>

<style></style>
