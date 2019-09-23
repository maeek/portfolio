<template>
  <div id="app">
    <logo />
    <page-navigation :collapsed="collapsed" />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <landing @down="down" />
      <about @down="down" />
      <skills />
      <section class="section fp-auto-height-responsive">
        <projects-landing class="slide fp-auto-height-responsive" />
        <project
          class="slide fp-auto-height-responsive"
          v-for="p in projects"
          :key="p.title"
          :project="p"
          :data-anchor="p.title"
        />
      </section>
      <contact />
      <footer-component class="section fp-auto-height" />
    </full-page>
  </div>
</template>

<script>
import landing from "@/pages/Landing.vue";
import projectsLanding from "@/pages/Projects.vue";
import project from "@/pages/Project.vue";
import footerComponent from "@/pages/Footer.vue";
import about from "@/pages/About.vue";
import skills from "@/pages/Skills.vue";
import contact from "@/pages/Contact.vue";
import logo from "@/components/decoration/logo.vue";
import pageNavigation from "@/components/pageNavigation.vue";
import "fullpage.js/dist/fullpage.css";

export default {
  name: "app",
  data() {
    return {
      fullpage: null,
      collapsed: false,
      options: {
        scrollOverflow: true,
        responsiveWidth: 769,
        responsiveHeight: 480,
        animateAnchor: false,
        scrollingSpeed: 600,
        controlArrows: true,
        loopHorizontal: false,
        dragAndMove: true,
        verticalCentered: true,
        slidesNavigation: true,
        slidesNavPosition: "bottom",
        anchors: [
          "start",
          "about",
          "skills",
          "projects",
          "contact",
          "copyright"
        ],
        onLeave: (origin, destination) => {
          this.collapsed = destination.anchor != this.options.anchors[0];
        }
      }
    };
  },
  computed: {
    projects() {
      return this.$root.$data.projects;
    }
  },
  components: {
    logo,
    landing,
    about,
    skills,
    projectsLanding,
    project,
    contact,
    footerComponent,
    pageNavigation
  },
  methods: {
    down() {
      this.$refs.fullpage.api.moveSectionDown();
    }
  },
  created() {
    if (!location.hash) {
      location.hash = this.options.anchors[0];
      this.collapsed = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  section.section {
    display: flex;
    background-color: $projects;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
}
</style>
