<template>
  <ul class="qualifications">
    <li v-for="qual in qualifications" :key="qual.code">
      <span class="code">{{ qual.code }}</span>
      <span class="separator">-</span>
      <span class="description">{{ qual.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Skills",
  computed: {
    qualifications() {
      return this.$root.$data.qualifications;
    }
  }
};
</script>

<style scoped lang="scss">
.qualifications {
  padding: 0;
  list-style: none;
  li {
    padding: 1rem 0;
  }
  span.separator {
    padding: 0 1rem;
  }
  span.code {
    color: $orange;
  }
}
</style>
