<template>
  <div class="tinymce-editor-page  app-fill-height">
    <v-btn dark color="blue accent-3" @click="printContent">
      Print Content
    </v-btn>

    <Editor
      ref="editor"
      class="editor my-2 app-fill-height"
      v-model="content"
      :init="init"
    ></Editor>

    <div v-if="false" class="image-preview app-both-center">
      <img
        src="https://static.oschina.net/uploads/space/2019/0801/072738_8gJF_2720166.jpg"
        alt=""
      />
    </div>

    <div
      class="image-tool-wrapper app-both-center"
      v-if="isMobile && showImageTool"
    >
      <v-layout column wrap class="image-tool">
        <v-flex>
          <v-btn
            @click="rotateLeft"
            large
            class="elevation-2"
            color="white"
            icon
            ><v-icon>rotate_left</v-icon></v-btn
          >
        </v-flex>
        <v-flex>
          <v-btn
            @click="rotateRight"
            large
            class="elevation-2"
            color="white"
            icon
            ><v-icon>rotate_right</v-icon></v-btn
          >
        </v-flex>
        <v-flex>
          <v-btn
            @click="flipVerticalVue"
            large
            class="elevation-2"
            color="white"
            icon
            ><v-icon style="transform: rotate(90deg)">flip</v-icon></v-btn
          >
        </v-flex>
        <v-flex>
          <v-btn
            @click="flipHorizonVue"
            large
            class="elevation-2"
            color="white"
            icon
            ><v-icon>flip</v-icon></v-btn
          >
        </v-flex>
      </v-layout>
    </div>
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
import "tinymce/plugins/print";
import "tinymce/plugins/preview";
import "tinymce/plugins/fullpage";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/autolink";
import "tinymce/plugins/directionality";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/media";
import "tinymce/plugins/template";
import "tinymce/plugins/codesample";
import "tinymce/plugins/table";
import "tinymce/plugins/charmap";
import "tinymce/plugins/hr";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/anchor";
import "tinymce/plugins/toc";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/advlist";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/help";

// mobile plugins
import "tinymce/plugins/autosave";
import "tinymce/plugins/lists";
import "tinymce/plugins/autolink";

import { isMobile } from "is-mobile";

const contentStyle = `
.mce-content-body img {
  max-width: 100% !important;
  height: auto !important;
}

.mce-content-body h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 150% !important;
}

.mce-content-body p,
div {
  line-height: 180% !important;
  word-spacing: 0.1rem !important;
  letter-spacing: 0.1rem !important;
  font-size: 14px !important;
}
`;

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
      showImagePreview: false,
      currentImage: "",
      isMobile: isMobile(),
      showImageTool: false,
      content: initHtml2,
      init: {
        language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径
        language: "zh_CN", //语言

        mobile: {
          theme: "mobile",
          plugins: ["autosave", "lists", "autolink"],
          toolbar: ["undo redo bold italic styleselect image"]
        },
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: ["/tinymce/skins/content/default/content.min.css"],
        content_style: contentStyle,
        plugins:
          "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
        toolbar:
          "formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment",
        image_advtab: true,
        init_instance_callback: editor => {
          console.log("Editor: " + editor.id + " is now initialized.");
          const that: any = this;

          // show image tool when mobile
          if (that.isMobile) {
            editor.on("NodeChange", e => {
              const img: HTMLImageElement = tinymce.activeEditor.selection.getNode();

              if (img.nodeName.toLowerCase() === "img") {
                that.showImageTool = true;
              } else {
                that.showImageTool = false;
              }
            });
          }
        },
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
            title: "基块",
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

    tinymce.activeEditor.on("dblclick ", () => {
      console.log("TCL: mounted -> dblclick");
      const img = this.getCurrentNode();
      if (img.nodeName.toLowerCase() === "img") {
        this.currentImage = (img as HTMLImageElement).src;
        // this.showImagePreview = true;
      }
    });

    setTimeout(() => {
      console.log("eeeeeeeeeeeeeeeeeeeeee");
      // tinymce.execCommand("bold", true);
      // const allActions = tinymce.activeEditor.ui.registry.getAll();
      // console.log("TCL: mounted -> allActions", allActions);
      // tinymce.activeEditor.ui.registry.getAll().buttons.rotateleftmy.onAction();
    }, 5000);
  },
  methods: {
    printContent() {
      const editor: any = this.$refs.editor;
      editor.value;
      console.log("TCL: printContent -> editor.value", editor.value);
    },
    scrollIntoViewCenter(element) {
      if (!element) {
        return;
      }

      element.scrollIntoView({ block: "center" });
    },
    getCurrentNode() {
      return tinymce.activeEditor.selection.getNode() as HTMLElement;
    },
    rotateLeft() {
      const img = this.getCurrentNode() as HTMLImageElement;
      this.scrollIntoViewCenter(img);

      if (img.nodeName.toLowerCase() === "img") {
        rotateImage(img, -90);
        setMargin(img);
      }
    },
    rotateRight() {
      const img = this.getCurrentNode() as HTMLImageElement;
      this.scrollIntoViewCenter(img);

      if (img.nodeName.toLowerCase() === "img") {
        rotateImage(img, 90);
        setMargin(img);
      }
    },
    flipVerticalVue() {
      const img = this.getCurrentNode() as HTMLImageElement;
      this.scrollIntoViewCenter(img);

      if (img.nodeName.toLowerCase() === "img") {
        flipVertical(img);
      }
    },
    flipHorizonVue() {
      const img = this.getCurrentNode() as HTMLImageElement;
      this.scrollIntoViewCenter(img);

      if (img.nodeName.toLowerCase() === "img") {
        flipHorizon(img);
      }
    }
  }
});
</script>

<style>
.aaa {
  transform: rotateZ(-90);
  margin-bottom: 200px;
}

.image-tool-wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
}

.image-preview {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
}

.mce-content-body img {
  max-width: 100% !important;
  height: auto !important;
}

.mce-content-body p,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 150%;
}

.mce-content-body p,
div {
  line-height: 180%;
  word-spacing: 0.1rem;
}
</style>
