<template>
  <div ref="root">
    <v-text-field name="name" label="label" id="id"></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name"],
  created() {
    const that: any = this;
    console.log("TCL: created -> this.$props", this.$props);
    console.log("name", that.name);
  },
  mounted() {
    console.log("TCL: created -> this.$refs.root", this.$refs.root);
    console.log(
      "TCL: mounted -> (this.$refs.root as any).validation",
      this.$refs.root
    );

    (this.$refs.root as any).getAttribute("validation");
    console.log(
      "TCL: mounted -> (this.$refs.root as any).getAttribute('validation')",
      JSON.stringify((this.$refs.root as any).getAttribute("validation"))
    );
  }
});
</script>

<style></style>
