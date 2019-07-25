<template>
  <h5>
    <slot></slot>
  </h5>
</template>

<script>
export default {
  name: "tinyHeader"
};
</script>

<style scoped lang="scss">
h5 {
  margin: 1.5rem 0;
  padding: 0;
  font-weight: 400;
  display: flex;
  color: $main-typo;
  font-size: 1rem;
  @extend %koho;
}
</style>
