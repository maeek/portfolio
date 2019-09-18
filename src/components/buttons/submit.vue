<template>
  <button ref="btn" type="button" @click="clickAnimation">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "submit-button",
  methods: {
    clickAnimation() {
      // const base = this.$refs.btn.innerText;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  background: $blue;
  border-radius: 8px;
  padding: 0.6rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 0;
  margin: 1rem 0 3rem 0;
  text-transform: uppercase;
  @extend %londrina-solid;
  @extend %typo-link;
  color: #fff;
  outline: none;
  text-shadow: 2px -1px 0px $red;
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    text-shadow: -2px 1px 0px $green;
  }
}
</style>
