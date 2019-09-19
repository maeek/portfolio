<template>
  <div class="bar">
    <div class="device">{{ device }}</div>
    <div class="buttons">
      <div class="btn min"></div>
      <div class="btn max"></div>
      <div class="btn cls"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar",
  props: {
    device: String
  }
};
</script>

<style scoped lang="scss">
.bar {
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: #162e5c;
  border-bottom: 3px solid #364d7a;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  .device {
    font-size: 0.7rem;
    @extend %koho;
    color: #fff;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 10px;
      height: 10px;
      flex: 0 0 10px;
      border-radius: 50%;
      margin: 0.15rem;
      &.min {
        background-color: $orange;
      }
      &.max {
        background-color: $red;
      }
      &.cls {
        background-color: $blue;
      }
    }
  }
}
</style>
