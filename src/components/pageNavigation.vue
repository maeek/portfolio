<template>
  <nav ref="navigation">
    <nav-link href="#">Home</nav-link>
    <nav-link href="#">Project</nav-link>
    <nav-link href="#">Skills</nav-link>
    <nav-link href="#">Contact</nav-link>
  </nav>
</template>

<script>
import navLink from "@/components/typo/navLink.vue";

export default {
  name: "navigation",
  components: {
    navLink
  },
  methods: {
    collapse() {
      this.$refs.navigation.classList.add("collapsed");
    },
    expand() {
      this.$refs.navigation.classList.remove("collapsed");
    },
    eventHandler() {
      const bd = document.querySelector("#app");
      if (bd.scrollTop >= bd.clientHeight * 0.5) {
        this.collapse();
      } else {
        this.expand();
      }
    }
  },
  mounted() {
    document
      .querySelector("#app")
      .addEventListener("scroll", this.eventHandler, false);
  }
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  display: flex;
  top: 2rem;
  right: 5rem;
  z-index: 100;
  transition: 0.5s;
  &.collapsed {
    right: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    a {
      margin: -0.1rem 0;
    }
  }
}
</style>
