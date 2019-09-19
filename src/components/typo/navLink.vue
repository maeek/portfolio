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
@media screen and (max-width: 934px) {
  a {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 578px) {
  a {
    margin: 0 0.6rem;
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  a {
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 320px) {
  a {
    font-size: 0.6rem;
    margin: 0 0.4rem;
  }
}
</style>
