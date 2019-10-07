<template>
  <div>
    <img
      aria-hidden="true"
      alt="Logo"
      @click="reload"
      draggable="false"
      src="@/assets/svg/logo.svg"
    />
  </div>
</template>

<script>
export default {
  name: "logo",
  methods: {
    reload() {
      location.reload();
    }
  }
};
</script>

<style scoped lang="scss">
div {
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  overflow: hidden;
  display: flex;
  z-index: 100;
  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    @extend %noselect;
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
