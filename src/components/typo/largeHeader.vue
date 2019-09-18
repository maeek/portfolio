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
  padding: 0;
  margin: 0 1rem;
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
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 13rem;
  }
}
@media screen and (max-width: 992px) {
  h1 {
    font-size: 10rem;
  }
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 8rem;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 6rem;
  }
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 4.3rem;
  }
}
@media screen and (max-width: 320px) {
  h1 {
    font-size: 3.5rem;
  }
}
</style>
