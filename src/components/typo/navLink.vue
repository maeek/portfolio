<template>
  <a :href="link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navLink",
  props: {
    link: String
  }
};
</script>

<style scoped lang="scss">
a {
  margin: 0 3rem;
  color: $basic;
  text-decoration: none;
  text-transform: uppercase;
  @extend %londrina-solid;
  @extend %typo-link;
}
</style>
