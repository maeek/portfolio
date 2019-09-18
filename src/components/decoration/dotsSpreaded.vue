<template>
  <div>
    <img ref="img" src="@/assets/svg/dotsSpreaded.svg" />
  </div>
</template>

<script>
export default {
  name: "dotsSpreaded",
  props: ["sizes"],
  mounted() {
    if (this.$props.sizes) {
      this.$refs.img.style.width = `${this.$props.sizes}px`;
    } else {
      this.$refs.img.style.width = "580px";
    }
  }
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
  @extend %noselect;
}
@media screen and (max-width: 480px) {
  img {
    max-width: 95%;
  }
}
</style>
