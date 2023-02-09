<template>
  <footer class="footer">
    created by
    <a
      class="link-dev"
      href="https://github.com/GabrielWolf-Dev/windbnb"
      target="_blank"
      rel="noopener noreferrer"
      >GabrielWolf-Dev</a
    >
    - devChallenges.io
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 40px 2%;
  text-align: center;
  color: var(--color-base-03);
}

.link-dev {
  font-weight: var(--font-weight-700);
  color: var(--color-base-03);
  text-decoration: underline;
}
</style>
