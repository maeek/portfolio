<template>
  <article class="section about fp-auto-height-responsive" ref="section">
    <div class="wrapper headerWrapper">
      <dots-spreaded />
      <wave-header />
      <section-header>About Me</section-header>
    </div>
    <p class="wrapper aboutWrapper">
      I'm 20 years old IT technical school graduate. For the past 2 years I've
      been studying and expanding in web development. My journey started with
      PHP and JavaScript programming language. I learned core curriculum in just
      two months which gave me oportunity to start doing my own projects. After
      a year I already had solid basics of JavaScript so I started writing
      back-end in Node.JS instead of PHP and started creating web applications.
      I'm still learning and expanding my knowledge in new technilogies doing
      projects in Vue.js
    </p>
    <div></div>
    <arrow-down @click.native="down" />
  </article>
</template>

<script>
import arrowDown from "@/components/buttons/arrow.vue";
import sectionHeader from "@/components/typo/header.vue";
import dotsSpreaded from "@/components/decoration/dotsSpreaded.vue";
import waveHeader from "@/components/decoration/waveHeader.vue";
export default {
  name: "About",
  components: {
    sectionHeader,
    dotsSpreaded,
    waveHeader,
    arrowDown
  },
  computed: {
    qualifications() {
      return this.$root.$data.qualifications;
    }
  },
  methods: {
    down() {
      this.$emit("down", true);
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  height: 100%;
  padding: 0;
  background-color: darken($skills, 1);
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .arrow {
    margin: 0 auto;
    left: 50%;
    bottom: 0;
    position: absolute;
    transform: translateX(-50%);
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    &.headerWrapper {
      margin: 8rem 0;
    }
    &.aboutWrapper {
      padding: 1rem 1rem 3rem 1rem;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
      max-width: 800px;
      color: #fff;
      @extend %koho;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
}
@media screen and (max-width: 992px) and (max-height: 450px) {
  .about {
    .wrapper {
      &.aboutWrapper {
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding-bottom: 1.5rem;
      }
    }
  }
}
@media screen and (max-width: 786px) {
  .about {
    .wrapper {
      &.aboutWrapper {
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding-bottom: 1.5rem;
      }
    }
    .arrow {
      position: relative;
      left: initial;
      bottom: initial;
      transform: initial;
    }
  }
}
@media screen and (max-width: 480px) {
  .about {
    width: 100%;
    padding: 0;
    align-items: flex-start;
    justify-content: center;
    .wrapper {
      width: 100%;
      &.headerWrapper {
        display: flex;
        justify-content: center;
        margin: 3.5rem 0;
      }
      &.aboutWrapper {
        font-size: 0.8rem;
        line-height: 1.2rem;
        margin-bottom: 1rem;
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
