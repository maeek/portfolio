<template>
  <a :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navLink",
  props: {
    href: String
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
  &:hover {
    color: $orange;
  }
}
@media screen and (max-width: 480px) {
  a {
    margin: 0 0.4rem;
    font-size: 1rem;
  }
}
</style>
