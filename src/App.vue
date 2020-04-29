<template>
  <div id="app">
    <el-input placeholder="Please input" v-model="left">left</el-input>
    <el-input placeholder="Please input" v-model="top">top</el-input>
    <div class="boundary" ref="boundary">
      <TooltipVuer :placement="placement" :visible="visible" :content="content" 
        :position="tooltipStyle"  @onActionClick="onActionClick" :options="options"
        @onClose="onClose" ref="popover"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
import Vue from "vue";
import TooltipVuer from './components/TooltipVuer.vue'
import {
  Input,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);
Vue.use(Input);

export default {
  name: 'app',
  methods: {
    onActionClick: function(action) {
      console.log("action", action)
      this.tooltipStyle.top = 300 + "px";
    },
    onClose: function() {
      console.log("close");
    }
  },
  data: function(){
    return {
      top: 200,
      left: 100,
      placement: "bottom",
      content: {
        title: "Test",
        description: "Description", 
        actions: [
          {
            title: "View 3D scaffold",
            url: "placeholder"
          },
          {
            title: "View plot",
            url: "placeholder"
          }
        ]
      },
      visible: true,
      tooltipStyle: {
        top: "200px",
        left: "100px",
        position: "absolute"
      },
      options: {}
    }
  },
  watch: {
    top: function() {
      this.tooltipStyle.top = this.top + "px";
    },
    left: function() {
      this.tooltipStyle.left = this.left + "px";
    }
  },
  mounted: function() {
    this.options.boundariesElement = this.$refs.boundary;
  },
  components: {
    TooltipVuer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width: 100%;
  position:absolute;
}

body {
  margin: 0px;
}

.boundary {
  width:500px;
  height:500px;
  top:100px;
  left:100px;
  background-color:thistle;
  position: absolute;
}

</style>
