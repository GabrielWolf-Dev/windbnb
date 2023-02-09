<template>
  <header class="header">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" />
    </router-link>

    <button class="btn-modal">
      <span>Search stays</span>

      <img class="icon-search" src="@/assets/search.svg" alt="Search icon" />
    </button>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.btn-modal {
  padding: 20px 26px;
  background-color: var(--color-base-01);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  color: var(--color-base-03);
}

span {
  padding-right: 16px;
  border-right: 1px solid var(--color-base-02);
}

@media (max-width: 420px) {
  .header {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
}
</style>
