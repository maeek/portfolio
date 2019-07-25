<template>
  <div id="app">
    <landing />
    <skills />
  </div>
</template>

<script>
import landing from "@/pages/Landing.vue";
import skills from "@/pages/Skills.vue";

export default {
  name: "app",
  components: {
    landing,
    skills
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow: auto;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
