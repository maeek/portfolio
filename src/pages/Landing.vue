<template>
  <article class="section landing">
    <logo />
    <dots-small />
    <decoration />
    <large-header></large-header>
    <div class="arrowWrapper">
      <arrow-down @click.native="down" />
    </div>
  </article>
</template>

<script>
import logo from "@/components/decoration/logo.vue";
import largeHeader from "@/components/typo/largeHeader.vue";
import decoration from "@/components/decoration/decoration.vue";
import dotsSmall from "@/components/decoration/dotsSmall.vue";
import arrowDown from "@/components/buttons/arrow.vue";
export default {
  name: "Landing",
  components: {
    largeHeader,
    decoration,
    dotsSmall,
    arrowDown,
    logo
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
  padding: 0 5%;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
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
</style>
