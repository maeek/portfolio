<template>
  <div :class="classObject">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "arrow",
  props: {
    direction: {
      type: String,
      default: "down"
    }
  },
  computed: {
    classObject() {
      let obj = {};
      obj["arrow"] = true;
      obj[this.$props.direction] = true;
      return obj;
    }
  }
};
</script>

<style scoped lang="scss">
.arrow {
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.arrow span {
  width: 0.5rem;
  height: 0.5rem;
  background: $blue;
  position: relative;
  border-bottom-right-radius: 50%;
  transform: rotate(45deg);
  transition: 0.4s;
}

.arrow span::before,
.arrow span::after {
  content: "";
  position: absolute;
  transition: 0.4s;
}

.arrow span::before {
  left: -4rem;
  top: 0;
  width: 4rem;
  height: 0.5rem;
  background: $orange;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transform-origin: top right;
}

.arrow span::after {
  left: 0;
  top: -4rem;
  width: 0.5rem;
  height: 4rem;
  background: $red;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transform-origin: bottom left;
}

.arrow:hover span {
  border-radius: 50%;
  transform: translateY(1rem) rotate(45deg);
}

.arrow:hover span::before {
  border-radius: 8px;
  transform: translate(0.5rem, -0.5rem) rotate(90deg);
}

.arrow:hover span::after {
  border-radius: 8px;
  transform: translate(-0.5rem, 0.5rem) rotate(-90deg);
}
.arrow.left span {
  transform: rotate(135deg);
}

.arrow.right span {
  transform: rotate(-45deg);
}

.arrow.up span {
  transform: rotate(225deg);
}
</style>
