<template>
  <el-container class="tooltip-container">
    <el-header height="30px" class="header">
      <div class="title">{{ content.title }}</div>
      <i v-if="displayCloseButton" class="el-icon-close icon"
        @click="onClose"></i>
    </el-header>
    <el-main class="main">
      <div class="block">
        <span class="display">{{content.description}}</span>
      </div>
      <el-button v-for="action in content.actions" round :key="action.title"
        class="button" @click="onActionClick(action)">
        {{action.title}}</el-button>
    </el-main>
  </el-container>
</template>

<script>
/* eslint-disable no-alert, no-console */
import Vue from "vue";
import {
  Button,
  Container,
  Header,
  Icon,
  Main
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Main);

export default { 
  name: "TooltipContent",
  methods: {
    onActionClick: function(action) {
      this.$emit("onActionClick", action);
    },
    onClose: function() {
      this.$emit("onClose");
    }
  },
  props: { 
    content: Object,
    displayCloseButton: Boolean 
  },
  data: function() {
    return {

    };
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tooltip-container {
  text-align:justify;
}

.header {
  color: #606266;
  line-height: 1;
  padding: 5px 17px 0 15px;
  font-size: 14px;
}

.icon {
  right: 17px;
  position: absolute;
  padding: 5px;
}

.display {
  width: 44px;
  word-break: normal;
}

.title {
  text-align: left;
  width: 16em;
  line-height: 1.5em !important;
  font-weight: 600;
  font-size: 1em;
  font-family: Helvetica;
}

.block {
  margin-bottom: 1.5em;
}

.icon {
  right: 0px;
  position: absolute;
  top: 10px;
}

.icon:hover {
  cursor: pointer;
}

.main {
  font-size: 14px;
  text-align: left;
  line-height: 1.5em;
  margin-top: 1em !important;
  font-family: Helvetica;
  font-weight: 400;
  /* outline: thin red solid; */
  padding: 1em !important;
}

.popover-container {
  height: 100%;
  width: 100%;
}

.main >>> .el-button.is-round{
  border-radius: 4px;
  padding: 9px 20px 10px 20px;
  display: flex;
  height: 36px;
}

.button {
  margin-left: 0px !important;
  margin-top: 0px !important;
  font-size: 14px !important;
}

.button+.button {
  margin-top: 10px !important;
}

.button:hover {
  color: #fff !important;
  background: #8300bf !important;
  border: 1px solid #8300bf !important;
}

</style>

<style scoped src="../styles/purple/button.css">
</style>
