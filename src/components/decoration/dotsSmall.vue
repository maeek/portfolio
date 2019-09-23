<template>
  <div>
    <img
      aria-hidden="true"
      alt="Dots decoration"
      src="@/assets/svg/dotsSmall.svg"
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
  right: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
  @extend %noselect;
}
</style>
