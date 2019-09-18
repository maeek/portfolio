<template>
  <div class="window">
    <bar :device="device" />
    <img draggable="false" :src="getImgUrl(image)" :alt="device" />
  </div>
</template>

<script>
import bar from "@/components/projectPreview/bar.vue";
export default {
  name: "window",
  components: {
    bar
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("@/assets/previews/", false, /\.png$/);
      return images("./" + pic + ".png");
    }
  },
  props: {
    image: String,
    device: String
  }
};
</script>

<style scoped lang="scss">
.window {
  font-size: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 0.6rem;
  box-shadow: 0px 0px 10px #061b46;
  img {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}
@media screen and (max-width: 1300px) {
  .window {
    max-height: 90%;
    img {
      width: 100%;
    }
  }
}
</style>
