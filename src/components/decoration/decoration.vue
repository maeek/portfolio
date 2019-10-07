<template>
  <div>
    <img
      aria-hidden="true"
      alt="Dots decoration"
      src="@/assets/svg/decoration.svg"
    />
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
  right: 0px;
  bottom: -260px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
  @extend %noselect;
}
@media screen and (max-width: 992px) and (max-height: 450px) {
  div {
    max-width: 55%;
  }
}
@media screen and (max-width: 425px) {
  div {
    bottom: initial;
    right: initial;
    top: 50%;
    transform: translateY(-50%);
    left: -50%;
    filter: brightness(0.75);
  }
}
</style>
