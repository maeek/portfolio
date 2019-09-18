<template>
  <div>
    <img src="@/assets/svg/waveHeader.svg" />
  </div>
</template>

<script>
export default {
  name: "waveHeader"
};
</script>

<style scoped lang="scss">
div {
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  img {
    width: 520px;
  }
  @extend %noselect;
}
@media screen and (max-width: 768px) {
  div {
    img {
      max-width: 75%;
    }
  }
}
@media screen and (max-width: 480px) {
  div {
    left: 0;
    img {
      max-width: 80%;
    }
  }
}
</style>
