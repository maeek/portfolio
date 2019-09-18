<template>
  <div id="app">
    <logo />
    <page-navigation :collapsed="collapsed" />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <landing @down="down" />
      <section class="section">
        <projects-landing class="slide" />
        <project class="slide" />
        <project class="slide" />
      </section>
      <skills />
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
        animateAnchor: false,
        scrollingSpeed: 600,
        controlArrows: true,
        loopHorizontal: false,
        verticalCentered: true,
        slidesNavigation: true,
      	slidesNavPosition: 'bottom',
        anchors: ["start", "projects", "skills", "contact", "copyright"],
        onLeave: (origin, destination) => {
          this.collapsed = destination.anchor != this.options.anchors[0];
        }
      }
    };
  },
  components: {
    logo,
    landing,
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
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
}
</style>
