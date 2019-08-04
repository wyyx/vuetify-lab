<template>
  <div class="tinymce-editor-page  app-fill-height">
    <!-- <v-btn color="success" @click="printContent">Print Content</v-btn> -->

    <Editor
      ref="editor"
      class="editor my-2 app-fill-height"
      v-model="content"
      :init="init"
    ></Editor>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Editor from "@tinymce/tinymce-vue";

// import tinymce
import "tinymce/tinymce";
import tinymce from "tinymce/tinymce";
console.log("TCL: tinymce", tinymce);

// A theme is also required
import "tinymce/themes/silver";
import "tinymce/themes/mobile";

// Any plugins you want to use has to be imported
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/image";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/fullpage";
// mobile plugins
import "tinymce/plugins/autosave";
import "tinymce/plugins/lists";
import "tinymce/plugins/autolink";

import { initHtml } from "../mocks/html.mock";
import { initHtml2 } from "../mocks/html2.mock";
import {
  getCssRotate,
  rotateImage,
  setMargin,
  flipVertical,
  flipHorizon
} from "../utils/editor.util";

export default Vue.extend({
  components: {
    Editor
  },
  data: function() {
    return {
      content: initHtml,
      init: {
        language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径
        language: "zh_CN", //语言
        mobile: {
          theme: "mobile",
          plugins: ["autosave", "lists", "autolink"],
          toolbar: ["undo", "redo", "bold", "italic", "styleselect", "image"]
        },
        plugins: "wordcount image imagetools fullpage fullscreen",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: ["/tinymce/skins/content/default/content.min.css"],
        content_style: `.mce-content-body * { 
          max-width: 100% !important;
          height: auto !important;
        }`,
        // height: 800,
        toolbar: ["undo redo image fullpage fullscreen"],
        // imagetools_toolbar:
        //   "rotateleft rotateright | flipv fliph | editimage imageoptions",
        // imagetools_cors_hosts: ["img3.mukewang.com"],
        setup: function(editor) {
          editor.ui.registry.addContextToolbar("imageEdit", {
            predicate: function(node) {
              return node.nodeName.toLowerCase() === "img";
            },
            items: "rotateLeftMy rotateRightMy flipvMy fliphMy",
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

          // rotate left 90deg
          editor.ui.registry.addButton("rotateLeftMy", {
            icon: "rotate-left",
            tooltip: "逆时针旋转90度",
            onAction: function(_) {
              const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();

              if (img.nodeName.toLowerCase() === "img") {
                rotateImage(img, -90);
                setMargin(img);
              }
            }
          });

          // rotate right 90deg
          editor.ui.registry.addButton("rotateRightMy", {
            icon: "rotate-right",
            tooltip: "顺时针旋转90度",
            onAction: function(_) {
              const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();

              if (img.nodeName.toLowerCase() === "img") {
                rotateImage(img, 90);
                setMargin(img);
              }
            }
          });

          // flip v
          editor.ui.registry.addButton("flipvMy", {
            icon: "flip-vertically",
            tooltip: "垂直翻转",
            onAction: function(_) {
              const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();

              if (img.nodeName.toLowerCase() === "img") {
                flipVertical(img);
              }
            }
          });

          // flip h
          editor.ui.registry.addButton("fliphMy", {
            icon: "flip-horizontally",
            tooltip: "水平翻转",
            onAction: function(_) {
              const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();

              if (img.nodeName.toLowerCase() === "img") {
                flipHorizon(img);
              }
            }
          });
        },
        style_formats: [
          {
            title: "标题",
            items: [
              { title: "标题1", format: "h1" },
              { title: "标题2", format: "h2" },
              { title: "标题3", format: "h3" },
              { title: "标题4", format: "h4" },
              { title: "标题5", format: "h5" },
              { title: "标题6", format: "h6" }
            ]
          },
          {
            title: "样式",
            items: [
              { title: "粗体", format: "bold" },
              { title: "斜体", format: "italic" },
              { title: "下划线", format: "underline" },
              { title: "删除先", format: "strikethrough" },
              { title: "上标", format: "superscript" },
              { title: "下标", format: "subscript" },
              { title: "代码", format: "code" }
            ]
          },
          {
            title: "区块",
            items: [
              { title: "段落", format: "p" },
              { title: "引用", format: "blockquote" },
              { title: "Div", format: "div" },
              { title: "Pre", format: "pre" }
            ]
          },
          {
            title: "对齐",
            items: [
              { title: "左对齐", format: "alignleft" },
              { title: "居中对齐", format: "aligncenter" },
              { title: "右对齐", format: "alignright" },
              { title: "两端对齐", format: "alignjustify" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    tinymce.activeEditor.on("mouseup", () => {
      const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();
      const transform = img.style.transform;
      setTimeout(() => {
        if (img.nodeName.toLowerCase() === "img") {
          img.style.transform;
          img.style.transform = transform;
          setMargin(img);
        }
      }, 0);
    });
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

<style>
.aaa {
  transform: rotateZ(-90);
  margin-bottom: 200px;
}
</style>
