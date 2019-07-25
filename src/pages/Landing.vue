<template>
  <article class="landing">
    <logo />
    <page-navigation />
    <dots-medium />
    <dots-small />
    <large-header></large-header>
    <div class="arrowWrapper">
      <arrow-down />
    </div>
  </article>
</template>

<script>
import largeHeader from "@/components/typo/largeHeader.vue";
import logo from "@/components/decoration/logo.vue";
import pageNavigation from "@/components/pageNavigation.vue";
import dotsMedium from "@/components/decoration/dotsMedium.vue";
import dotsSmall from "@/components/decoration/dotsSmall.vue";
import arrowDown from "@/components/buttons/arrow.vue";
export default {
  name: "Landing",
  components: {
    largeHeader,
    logo,
    pageNavigation,
    dotsMedium,
    dotsSmall,
    arrowDown
  }
};
</script>

<style scoped lang="scss">
.landing {
  height: 100%;
  padding: 0 10%;
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
    right: 50%;
    margin: 0 auto;
  }
}
</style>
