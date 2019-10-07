<template>
  <div>
    <!-- <img
      aria-hidden="true"
      alt="Dots decoration"
      src="@/assets/svg/dotsSmall.svg"
    /> -->
  </div>
</template>

<script>
export default {
  name: "dotsSmall"
};
</script>

<style scoped lang="scss">
div {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  top: 0;
  z-index: -1;
  background: url("../../assets/svg/dotsSmall.svg") no-repeat top right;
  background-size: auto 100%;
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
  @extend %noselect;
}
@media screen and (max-width: 768px) {
  div {
    display: none;
  }
}
</style>
