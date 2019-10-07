<template>
  <a :href="href" :class="{ active: show }">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navLink",
  props: {
    href: String,
    active: String
  },
  computed: {
    show() {
      return this.active.includes(this.href);
    }
  }
};
</script>

<style scoped lang="scss">
a {
  margin: 0 2rem;
  color: $basic;
  text-decoration: none;
  text-transform: uppercase;
  @extend %koho;
  @extend %typo-link;
  font-weight: 900;
  &:hover {
    color: $orange;
  }
  &.active {
    color: $orange;
  }
}
@media screen and (max-width: 1000px) {
  a {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 650px) {
  a {
    margin: 0 0.6rem;
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  a {
    font-size: 0.6rem;
    margin: 0 0.6rem;
  }
}
@media screen and (max-width: 320px) {
  a {
    font-size: 0.55rem;
  }
}
</style>
