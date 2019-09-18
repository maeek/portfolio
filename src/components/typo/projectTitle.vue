<template>
  <h4>
    <slot></slot>
  </h4>
</template>

<script>
export default {
  name: "sectionHeader"
};
</script>

<style scoped lang="scss">
h4 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  z-index: 10;
  color: $basic;
  @extend %londrina-solid;
  font-size: 3.5rem;
}
@media screen and (max-width: 768px) {
  h4 {
    font-size: 2rem;
  }
}
@media screen and (max-width: 480px) {
  h4 {
    font-size: 1.5rem;
  }
}
</style>
