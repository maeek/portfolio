<template>
  <article class="section about fp-auto-height-responsive" ref="section">
    <div class="wrapper headerWrapper">
      <dots-spreaded />
      <wave-header />
      <section-header>About Me</section-header>
    </div>
    <p class="wrapper aboutWrapper">
      I'm 20 years old IT technical school graduate. For the past 2 years I've been studying and expanding in web development. My journey started with PHP and JavaScript programming language. I learned core curriculum in just two months which gave me oportunity to start doing my own projects. After a year I already had solid basics od JavaScript so I started writing back-end in Node.JS instead of PHP and started creating web applications. I'm still learning and expanding my knowledge in new technilogies doing projects in Vue.js
    </p>
  </article>
</template>

<script>
import sectionHeader from "@/components/typo/header.vue";
import cvHeader from "@/components/typo/cvHeader.vue";
import tinyTitle from "@/components/typo/tinyTitle.vue";
import dotsSpreaded from "@/components/decoration/dotsSpreaded.vue";
import waveHeader from "@/components/decoration/waveHeader.vue";
export default {
  name: "About",
  components: {
    sectionHeader,
    dotsSpreaded,
    waveHeader,
    cvHeader,
    tinyTitle
  },
  computed: {
    qualifications() {
      return this.$root.$data.qualifications;
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  height: 100%;
  padding: 0 10%;
  background-color: $skills;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    &.headerWrapper {
      margin: 8rem 0;
    }
    &.aboutWrapper {
      width: 100%;
      padding: 1rem;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      max-width: 660px;
      color: #fff;
      @extend %koho;
      line-height: 2rem;
    }
  }
}
@media screen and (max-width: 480px) {
  .about {
    padding: 0 2.5%;
    align-items: flex-start;
    justify-content: flex-start;
    .wrapper {
      &.headerWrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 3.5rem 0;
      }
      &.aboutWrapper {
        .columns {
          div {
            flex: 1 0 100%;
            display: flex;
            flex-direction: column;
            &:nth-of-type(2) {
              padding: 0;
            }
          }
        }
      }
    }
  }
}
</style>
