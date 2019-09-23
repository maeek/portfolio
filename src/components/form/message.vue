<template>
  <textarea
    required
    :name="name"
    placeholder="Type your message here"
  ></textarea>
</template>

<script>
export default {
  name: "message",
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
textarea {
  width: 100%;
  min-height: 160px;
  border: 2px solid darken($orange, 35);
  border-radius: 8px;
  background-color: $projects;
  outline: none;
  color: #fff;
  padding: 0.5rem 0.3rem;
  font-size: 1rem;
  resize: vertical;
  @extend %koho;
  &:focus {
    border: 2px solid $orange;
  }
  &:valid {
    border: 2px solid $green;
  }
}
@media screen and (max-width: 480px) {
  textarea {
    border-radius: 4px;
  }
}
</style>
