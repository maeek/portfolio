<template>
  <div>
    <img draggable="false" src="@/assets/svg/logo.svg" />
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped lang="scss">
div {
  position: fixed;
  left: 3rem;
  top: 2rem;
  overflow: hidden;
  display: flex;
  z-index: 100;
  img {
    height: 2rem;
    width: 2rem;
  }
}
@media screen and (max-width: 480px) {
  div {
    left: 1.5rem;
    top: 1rem;
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
