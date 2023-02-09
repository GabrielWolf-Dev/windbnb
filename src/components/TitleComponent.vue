<template>
  <h1 class="title">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    text: {
      type: String,
      default: "Title component",
    },
  },
};
</script>

<style scoped>
.title {
  font-size: var(--font-size-24);
  font-weight: var(--font-weight-700);
  color: var(--color-base-05);
}
</style>
