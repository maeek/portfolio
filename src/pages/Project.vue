<template>
  <article class="slide project">
    <div class="wrapper"></div>
  </article>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      default: {
        title: "",
        links: {
          live: "",
          code: ""
        },
        description: "",
        images: {
          desktop: "",
          mobile: ""
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.project {
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
  }
}

</style>
