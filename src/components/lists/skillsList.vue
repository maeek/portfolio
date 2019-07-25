<template>
  <div class="techWrapper">
    <ul class="technologies" v-for="(tech, i) in technologies" :key="i">
      <ul v-for="t in tech.column" :key="t.name">
        <li>{{ t.name }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "skillsList",
  computed: {
    technologies() {
      return this.$root.$data.technologies;
    }
  }
};
</script>

<style scoped lang="scss">
.techWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
