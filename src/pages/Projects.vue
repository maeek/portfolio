<template>
  <article class="slide projects">
    <div class="wrapper headerWrapper">
      <dots-spreaded sizes="800" />
      <wave-header />
      <section-header>Projects</section-header>
    </div>
    <div class="wrapper projectsWrapper">
      <ul>
        <li>This portfolio</li>
        <li v-for="p in projects" :key="p.title">
          <a :href="`#projects/${p.title}`">{{ p.title }}</a>
        </li>
      </ul>
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
  },
  computed: {
    projects() {
      return this.$root.$data.projects;
    }
  }
};
</script>

<style scoped lang="scss">
.projects {
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: $projects;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
      align-items: center;
      flex-direction: column;
      ul {
        text-align: center;
        max-width: 95%;
        min-width: 300px;
        margin-bottom: 2.5rem;
        li {
          padding: 0.5rem;
          margin: 0.2rem 0;
          width: 100%;
          a {
            color: inherit;
            text-decoration-color: $orange;
          }
        }
      }
    }
  }
}
</style>
