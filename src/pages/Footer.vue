<template>
  <footer>
    <img draggable="false" src="@/assets/svg/logo.svg" width="28" />
    <h3><span>&copy;</span> Maciej Suchanecki 2019</h3>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 0 auto;
  flex-direction: column;
  background-color: $landing;
  padding: 2rem 0;
  img {
    margin: 1rem 0;
  }
  h3 {
    @extend %londrina-solid;
    color: #fff;
    letter-spacing: 0.1rem;
    font-weight: 400;
    line-height: 1rem;
    span {
      color: $orange;
      vertical-align: bottom;
      font-size: 2.1rem;
    }
  }
}
</style>
