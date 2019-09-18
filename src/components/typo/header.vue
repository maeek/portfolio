<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "normalHeader"
};
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  z-index: 10;
  color: $basic;
  @extend %londrina-solid;
  @extend %typo-header;
}
@media screen and (max-width: 480px) {
  h2 {
    font-size: 3.8rem;
  }
}
</style>
