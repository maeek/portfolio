<template>
  <article class="section skills fp-auto-height-responsive" ref="section">
    <div class="wrapper headerWrapper">
      <dots-spreaded />
      <wave-header />
      <section-header>Skills</section-header>
    </div>
    <div class="wrapper skillsWrapper">
      <cv-header>IT Technician</cv-header>
      <div class="columns">
        <div>
          <tiny-title>Qualifications</tiny-title>
          <qualifications-list></qualifications-list>
        </div>
        <div>
          <tiny-title>Technologies</tiny-title>
          <skills-list></skills-list>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import sectionHeader from "@/components/typo/header.vue";
import cvHeader from "@/components/typo/cvHeader.vue";
import tinyTitle from "@/components/typo/tinyTitle.vue";
import dotsSpreaded from "@/components/decoration/dotsSpreaded.vue";
import waveHeader from "@/components/decoration/waveHeader.vue";
import skillsList from "@/components/lists/skillsList.vue";
import qualificationsList from "@/components/lists/qualificationsList.vue";
export default {
  name: "Skills",
  components: {
    sectionHeader,
    dotsSpreaded,
    waveHeader,
    cvHeader,
    tinyTitle,
    skillsList,
    qualificationsList
  },
  computed: {
    qualifications() {
      return this.$root.$data.qualifications;
    }
  }
};
</script>

<style scoped lang="scss">
.skills {
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
    &.skillsWrapper {
      width: 100%;
      padding: 1rem;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      .columns {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        div {
          flex: 1 0 50%;
          &:nth-of-type(2) {
            padding: 0 2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .skills {
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
      &.skillsWrapper {
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
