<template>
  <common-page>
    <router-view/>
  </common-page>
</template>

<script lang="ts">

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
