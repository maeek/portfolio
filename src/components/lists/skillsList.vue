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
.technologies {
  ul {
    list-style-position: inside;
    list-style-type: square;
    li {
      line-height: 1.8rem;
    }
  }
}
@media screen and (max-width: 480px) {
  .technologies {
    margin: 0;
    &:nth-of-type(2) {
      margin-bottom: 2rem;
      padding-top: 0.5rem;
    }
  }
}
</style>
