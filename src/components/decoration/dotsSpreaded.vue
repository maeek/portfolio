<template>
  <div>
    <img src="@/assets/svg/dotsSpreaded.svg" />
  </div>
</template>

<script>
export default {
  name: "dotsSpreaded"
};
</script>

<style scoped lang="scss">
div {
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  img {
    width: 580px;
  }
  @extend %noselect;
}
</style>
