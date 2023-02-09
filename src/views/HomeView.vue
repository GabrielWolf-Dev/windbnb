<template>
  <main class="home">
    <header class="home-header">
      <TitleComponent text="Stays in Finland" />

      <span class="result">12+ stays</span>
    </header>

    <div class="list-stays">
      {{ data }}
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

import TitleComponent from "@/components/TitleComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TitleComponent,
  },
  computed: {
    ...mapState(["data"]),
    ...mapActions(["getData"]),
  },
  created() {
    this.getData;
  },
});
</script>

<style scoped>
.home-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-base-04);
}
</style>
