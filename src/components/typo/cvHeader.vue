<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "cvHeader"
};
</script>

<style scoped lang="scss">
h3 {
  margin: 0 10%;
  padding: 0;
  display: flex;
  font-weight: 900;
  color: $basic;
  @extend %koho;
  @extend %typo-cv-header;
}
@media screen and (max-width: 480px) {
  h3 {
    font-size: 2rem;
    margin: 0 0.5rem;
  }
}
</style>
