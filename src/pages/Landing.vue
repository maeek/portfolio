<template>
  <article class="section landing">
    <dots-medium />
    <dots-small />
    <large-header></large-header>
    <div class="arrowWrapper">
      <arrow-down @click.native="down" />
    </div>
  </article>
</template>

<script>
import largeHeader from "@/components/typo/largeHeader.vue";
import dotsMedium from "@/components/decoration/dotsMedium.vue";
import dotsSmall from "@/components/decoration/dotsSmall.vue";
import arrowDown from "@/components/buttons/arrow.vue";
export default {
  name: "Landing",
  components: {
    largeHeader,
    dotsMedium,
    dotsSmall,
    arrowDown
  },
  methods: {
    down() {
      this.$emit("down", true);
    }
  }
};
</script>

<style scoped lang="scss">
.landing {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .arrowWrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
  }
}
// @media screen and (max-width: 1200px) {
//   h1 {
//     font-size: 13rem;
//   }
// }
// @media screen and (max-width: 992px) {
//   h1 {
//     font-size: 10rem;
//   }
// }
// @media screen and (max-width: 768px) {
//   h1 {
//     font-size: 8rem;
//   }
// }
</style>
