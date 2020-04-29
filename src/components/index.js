// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import TooltipVuer from "./TooltipVuer.vue";

const Components = {
  TooltipVuer  
};
  
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
  
export default Components;
  