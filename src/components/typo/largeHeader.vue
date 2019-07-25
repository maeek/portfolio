<template>
  <h1>
    <span>{{ name }}</span>
    <span>{{ last }}</span>
  </h1>
</template>

<script>
export default {
  name: "largeHeader",
  props: {
    name: {
      type: String,
      default: "Maciej"
    },
    last: {
      type: String,
      default: "Suchanecki"
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  span:nth-of-type(1) {
    color: $orange;
    @extend %londrina-shadow;
  }
  span:nth-of-type(2) {
    color: $blue;
    @extend %londrina-solid;
  }
  @extend %typo-landing;
}
</style>
