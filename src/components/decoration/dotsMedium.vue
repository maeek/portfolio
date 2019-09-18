<template>
  <div>
    <img src="@/assets/svg/dotsMedium.svg" />
  </div>
</template>

<script>
export default {
  name: "dotsMedium"
};
</script>

<style scoped lang="scss">
div {
  position: absolute;
  left: -15rem;
  bottom: -15rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: -1;
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  @extend %noselect;
}
@media screen and (max-width: 480px) {
  div{
    left: 0;
    bottom: -10rem;
  }
}
</style>
