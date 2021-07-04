<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Matthew
 * @Date: 2021-07-02 23:09:20
 * @LastEditTime: 2021-07-04 16:43:33
-->
<template>
  <div
    id="ele-menu"
    style="width: 60px; height: 100%; background-color: red"
  ></div>
</template>

<script setup>
import { defineProps, onMounted, reactive } from "vue";
const electron = require("electron").remote;
const win = electron.getCurrentWindow();

onMounted(() => {
  let el = document.getElementById("ele-menu");
  el.addEventListener("mouseenter", () => {
    console.log("enter");
    document.getElementById("ele-menu").style.width = "60px";
    document.getElementById("ele-menu").style.opacity = "1";
    win.setIgnoreMouseEvents(false);
  });
  el.addEventListener("mouseleave", (event) => {
    console.log("leave", event.layerX);
    if (event.layerX > 5) {
      document.getElementById("ele-menu").style.width = "10px";
      document.getElementById("ele-menu").style.opacity = "0";
      win.setIgnoreMouseEvents(true, { forward: true });
    }
  });
});

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
