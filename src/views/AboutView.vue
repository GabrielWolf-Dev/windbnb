<template>
  <section class="about">
    <div class="illustrations">
      <img src="@/assets/construction.svg" alt="Construction icon" />
      <img src="@/assets/code.svg" alt="Code icon" />
      <img src="@/assets/engineering.svg" alt="Engineering icon" />
    </div>

    <h1 class="title">About the project</h1>
    <p class="text">
      The project was focused on applying many of the concepts learned from
      Vue.js that I'm learning. I had been studying version 2 and in this
      project I decided to do it with version 3 to see what has changed so much
      but without using the TypeScript that I intend to learn in the future.
    </p>
    <p class="text">
      As I wanted to do something quick I decided to take this challenge on
      devChallenges.io and consume the data via json in the repository which
      limits me in the functionality that a real world API would have, but it
      was enough for this solution.
    </p>
    <p class="text">
      I also changed some things that are not the same in the UI and schema in
      the project, even adding the "/stay" route to better visualize each item.
    </p>
    <p class="text">
      Another point to highlight is the standardization of commits with
      commitlint, husky and commiten, which I believe is the greatest learning
      experience in this project and the next portfolios to come will follow
      this pattern.
    </p>

    <h2 class="subtitle">Technologies</h2>
    <ul class="list-tech">
      <li class="tech">Vue 3</li>
      <li class="tech">Vue router and Vuex</li>
      <li class="tech">Commit lint, husky and commitizen for standardize the commits</li>
      <li class="tech">Consuming a json via repository</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store";

export default {
  name: "AboutView",
  computed: {
    ...mapState(["staySelected"]),
  },
  created() {
    document.title = "Windbnb | About";
    if (this.staySelected !== null) store.commit("SET_STAY", null);
  },
};
</script>

<style scoped>
.about {
  width: 100%;
}
.illustrations {
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: var(--font-size-24);
  font-weight: var(--font-weight-800);
  color: var(--color-base-05);
  margin-top: 16px;
}

.subtitle {
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-700);
  color: var(--color-base-05);
  padding: 16px 0;
  border-top: 1px solid var(--color-primary);
}

.text {
  width: 100%;
  max-width: 1200px;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
  color: var(--color-base-04);
  margin: 16px 0;
}

.list-tech {
  list-style: disc inside;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tech {
  color: var(--color-base-04);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
}
</style>
