<template>
  <common-page>
    <router-view v-slot="{ Component} ">
      <transition mode="out-in" name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </common-page>
</template>

<script lang="ts">
import "@/assets/style/common/common.css";
import CommonPage from "@/components/common/CommonPage.vue";

export default {
  name: "App",
  components: {CommonPage}
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
