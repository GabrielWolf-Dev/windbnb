<template>
  <header class="header">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" />
    </router-link>

    <nav>
      <ul>
        <li class="item-nav">
          <router-link class="link" to="about">About</router-link>
        </li>
        <li class="item-nav">
          <button class="btn-modal">
            <span>Search stays</span>

            <img
              class="icon-search"
              src="@/assets/search.svg"
              alt="Search icon"
            />
          </button>
        </li>
      </ul>
    </nav>
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

.item-nav {
  display: inline-block;
}

.item-nav:first-child {
  margin-right: 16px;
}

.link {
  color: var(--color-base-03);
  transition: 0.3s;
}

.link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .link {
    text-decoration: underline;
  }
}

@media (max-width: 420px) {
  .header {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;
  }

  .item-nav:first-child {
    margin-bottom: 20px;
  }
}
</style>
