<template>
  <article class="slide projects">
    <div class="wrapper headerWrapper">
      <dots-spreaded sizes="800" />
      <wave-header />
      <section-header>Projects</section-header>
    </div>
  </article>
</template>

<script>
import sectionHeader from "@/components/typo/header.vue";
import dotsSpreaded from "@/components/decoration/dotsSpreaded.vue";
import waveHeader from "@/components/decoration/waveHeader.vue";
export default {
  name: "Projects",
  components: {
    sectionHeader,
    dotsSpreaded,
    waveHeader
  }
};
</script>

<style scoped lang="scss">
.projects {
  height: 100%;
  width: 100%;
  padding: 0 10%;
  background-color: $projects;
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
    &.headerWrapper {
      margin: 8rem 0;
    }
    &.projectsWrapper {
      width: 100%;
      padding: 1rem;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      .columns {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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
</style>
