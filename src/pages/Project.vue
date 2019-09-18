<template>
  <article class="slide project fp-auto-height-responsive">
    <div class="wrapper row">
      <div class="wrapper wrapperHeader">
        <wave-title />
        <project-title>{{ project.title }}</project-title>
      </div>
      <div class="wrapper row">
        <div class="wrapper row links">
          <a
            target="_blank"
            v-if="project.links.live"
            :href="project.links.live"
            >Live</a
          >
          <a
            target="_blank"
            v-if="project.links.code"
            :href="project.links.code"
            >Code</a
          >
        </div>
      </div>
    </div>
    <p>{{ project.description }}</p>
    <div class="wrapper wrapperContent">
      <window
        device="Desktop"
        v-if="project.images.desktop"
        :image="project.images.desktop"
      />
      <window
        device="Mobile"
        v-if="project.images.mobile"
        :image="project.images.mobile"
      />
    </div>
  </article>
</template>

<script>
import waveTitle from "@/components/decoration/waveTitle.vue";
import projectTitle from "@/components/typo/projectTitle.vue";
import window from "@/components/projectPreview/window.vue";
export default {
  name: "Project",
  components: {
    waveTitle,
    projectTitle,
    window
  },
  props: {
    project: {
      default: {
        title: "Unknown Project",
        links: {
          live: "https://github.com/maeek",
          code: "https://maek.eswomp.it/"
        },
        description: "Description",
        images: {
          desktop: null,
          mobile: null
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.project {
  height: 100%;
  background-color: $projects;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 125;
  p {
    margin: 1rem 3rem;
    @extend %koho;
    color: #fff;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.row {
      flex-direction: row;
    }
    &.links {
      margin: 0 1rem;
      a {
        color: $orange;
        @extend %koho;
        @extend %typo-basic;
        margin: 1rem;
      }
    }
    &.wrapperHeader {
      flex-direction: row;
      justify-content: flex-start;
      align-self: flex-start;
      padding: 0;
      margin: 2rem 0 1rem 2.5rem;
      position: relative;
    }
    &.wrapperContent {
      width: 100%;
      flex-direction: row;
    }
  }
}
@media screen and (max-width: 768px) {
  .project {
    p {
      margin: 0.8rem;
    }
    .wrapper {
      &.wrapperHeader {
        margin: 2rem 0 1rem 0.8rem;
      }
      &.wrapperContent {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
