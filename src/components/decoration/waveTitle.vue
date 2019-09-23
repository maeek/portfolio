<template>
  <div>
    <img
      aria-hidden="true"
      alt="Project wave"
      src="@/assets/svg/waveProject.svg"
    />
  </div>
</template>

<script>
export default {
  name: "waveTitle"
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
  width: 100%;
  img {
    width: 100%;
    max-height: 4rem;
  }
  @extend %noselect;
}
// @media screen and (max-width: 768px) {
//   div {
//     img {
//       max-width: 75%;
//     }
//   }
// }
// @media screen and (max-width: 480px) {
//   div {
//     left: 0;
//     img {
//       max-width: 80%;
//     }
//   }
// }
</style>
