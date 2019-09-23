<template>
  <input
    :type="type"
    :required="required"
    :name="name"
    :placeholder="`Type your ${name} here`"
  />
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
input {
  width: 100%;
  border: 2px solid darken($orange, 35);
  border-radius: 8px;
  background-color: $projects;
  outline: none;
  color: #fff;
  padding: 0.5rem 0.3rem;
  font-size: 1rem;
  @extend %koho;
  &:focus {
    border: 2px solid $orange;
  }
  &:valid {
    border: 2px solid $green;
  }
}
@media screen and (max-width: 480px) {
  input {
    border-radius: 4px;
  }
}
</style>
