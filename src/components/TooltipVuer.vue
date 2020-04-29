<template>
  <div v-bind:style="position" ref="container">
    <el-popover :appendToBody="appendToBody" trigger="manual" width="243" :disabled="disabled" :value="visible"
      :placement="placement" visible-arrow="true" :popper-options="options">
      <TooltipContent :content="content" @onActionClick="onActionClick"
        @onClose="onClose" :displayCloseButton="displayCloseButton"
        ref="content"/>
      <div slot="reference"></div>
    </el-popover>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
import Vue from "vue";
import {
  Popover,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import TooltipContent from "./TooltipContent.vue";
locale.use(lang);
Vue.use(Popover);

export default {
  name: "TooltipVuer",
  components: {
    TooltipContent
  },
  methods: {
    onActionClick: function(action) {
      this.$emit("onActionClick", action);
    },
    onClose: function() {
      this.$emit("onClose");
    }
  },
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      } 
    },
    displayCloseButton: {
      type: Boolean,
      default: function() {
        return true;
      } 
    },
    placement: String, 
    visible: Boolean,
    content: Object,
    position: Object
  },
  data: function() {
    return {
      disabled: false,
      appendToBody: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

