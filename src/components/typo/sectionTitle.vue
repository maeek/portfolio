<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "sectionHeader"
};
</script>

<style scoped lang="scss">
h3 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  z-index: 10;
  color: $basic;
  @extend %londrina-solid;
  font-size: 5rem;
}
@media screen and (max-width: 768px) {
  h3 {
    font-size: 3rem;
  }
}
@media screen and (max-width: 480px) {
  h3 {
    font-size: 2.2rem;
  }
}
</style>
