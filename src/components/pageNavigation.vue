<template>
  <nav ref="navigation" :class="{ collapsed }">
    <nav-link :active="link" href="#start">Home</nav-link>
    <nav-link :active="link" href="#about">About Me</nav-link>
    <nav-link :active="link" href="#skills">Skills</nav-link>
    <nav-link :active="link" href="#projects">Projects</nav-link>
    <nav-link :active="link" href="#contact">Contact</nav-link>
  </nav>
</template>

<script>
import navLink from "@/components/typo/navLink.vue";

export default {
  name: "navigation",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    navLink
  },
  data() {
    return {
      active: "#start"
    };
  },
  computed: {
    link() {
      return this.active;
    }
  },
  methods: {
    hsh() {
      this.active = location.hash;
      this.$nextTick();
    }
  },
  mounted() {
    this.active = location.hash;
    window.addEventListener("hashchange", this.hsh);
  },
  beforeDestroy() {
    window.removeEventListener("hashchange", this.hsh);
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
@media screen and (max-width: 786px) {
  nav {
    right: 1rem;
  }
}
@media screen and (max-width: 480px) {
  nav {
    top: 1.3rem;
    right: 0.5rem;
    &.collapsed {
      right: 1rem;
    }
  }
}
</style>
