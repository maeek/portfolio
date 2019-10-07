<template>
  <h1>
    <span>I create</span>
    <span>web applications</span>
    <span>that perform</span>
    <span class="small">Aspiring Fullstack developer</span>
    <span class="smaller">Maciej Suchanecki</span>
  </h1>
</template>

<script>
export default {
  name: "largeHeader"
};
</script>

<style scoped lang="scss">
h1 {
  padding: 0;
  margin: 0 1rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  color: #fff;
  @extend %koho;
  @extend %typo-landing;
  .small {
    font-size: 2rem;
    color: darken(#fff, 15%);
  }
  .smaller {
    font-size: 1rem;
    margin: 1rem 0;
    color: $orange;
    background-color: #000;
    padding: 0.1rem;
  }
}
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 5rem;
    .small {
      font-size: 2rem;
    }
  }
}
@media screen and (max-width: 992px) {
  h1 {
    font-size: 4rem;
    .small {
      font-size: 2rem;
    }
  }
}
@media screen and (max-height: 550px) {
  h1 {
    font-size: 3rem;
  }
}
@media screen and (max-width: 992px) and (max-height: 450px) {
  h1 {
    font-size: 1.5rem;
    .small {
      font-size: 1rem;
    }
  }
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
    .small {
      font-size: 1.6rem;
    }
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 2rem;
    .small {
      font-size: 1rem;
    }
    .smaller {
      margin-top: 3rem;
    }
  }
}
@media screen and (max-width: 320px) {
  h1 {
    font-size: 1.5rem;
    .small {
      font-size: 0.8rem;
    }
  }
}
</style>
