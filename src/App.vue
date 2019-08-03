<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <v-btn color="primary" to="/tiny-mce-editor">TinyMCE Editor</v-btn>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <!-- <div class="article-collect-template">
        <div
          v-for="formControl in articleCollectTemplate.formControls"
          :key="formControl.name"
        >
          <DynamicForm v-bind="formControl"></DynamicForm>
          <div>{{ formControl }}</div>
        </div>
      </div> -->

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DynamicForm from "./components/DynamicForm.component.vue";

export default {
  name: "App",
  components: {},
  data() {
    return {
      articleCollectTemplate: {
        type: 123,
        desc: "文章征集模板",
        formControls: [
          {
            type: "select",
            name: "category",
            validation: {
              required: true
            },
            label: "目录",
            placeholder: "请选择目录",
            itemList: [
              {
                text: "科幻",
                value: 1
              },
              {
                text: "散文",
                value: 2
              },
              {
                text: "经济",
                value: 3
              }
            ],
            model: 0
          },
          {
            type: "text",
            name: "title",
            validation: {
              max: 20
            },
            label: "标题",
            placeholder: "文章标题",
            hint: "请写一个吸引人的标题",
            model: ""
          },
          {
            type: "textarea",
            name: "content",
            validation: {
              max: 1000
            },
            label: "正文",
            placeholder: "这里写正文",
            hint: "正文的字数不能超过500",
            counter: 1000,
            maxlength: 1000,
            model: ""
          }
        ]
      }
    };
  }
};
</script>
