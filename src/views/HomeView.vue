<template>
  <main class="home">
    <header class="home-header">
      <TitleComponent text="Stays in Finland" />

      <span class="result">12+ stays</span>
    </header>

    <ul class="list-stays">
      <li class="stay-box" v-for="stay in data" :key="stay.id">
        <figure>
          <img class="stay-img" :src="stay.photo" :alt="stay.title" />
          <figcaption>
            <header class="stay-header">
              <div>
                <h4 class="stay-super-host" v-if="stay.superHost">
                  SUPER HOST
                </h4>
                <p class="stay-type">{{ stay.type }}</p>
              </div>

              <span class="stay-rating">
                <img src="@/assets/star-rate.svg" alt="Icon star" />
                {{ stay.rating }}
              </span>
            </header>

            <p class="stay-description">{{ stay.title }}</p>
          </figcaption>
        </figure>
      </li>
    </ul>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import store from "@/store";
import { mapState } from "vuex";

import TitleComponent from "@/components/TitleComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TitleComponent,
  },
  computed: {
    ...mapState(["data"]),
  },
  created() {
    store.dispatch("getData");
  },
});
</script>

<style scoped>
/* Variables */
main {
  --width-lg: 400px;
  --height-lg: 250px;

  --width-md: 300px;
  --height-md: 200px;

  --width-sm: 250px;
  --height-sm: 150px;
}

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

.list-stays {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, var(--width-lg));
  gap: 32px;
  margin-top: 32px;
}

.stay-img {
  width: 100%;
  height: var(--height-lg);
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
}

.stay-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 12px 0;
}

.stay-super-host {
  padding: 8px 10px;
  border-radius: 16px;
  border: 1px solid var(--color-base-04);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-700);
  text-transform: uppercase;
  display: inline-block;
  margin-right: 12px;
}

.stay-type {
  display: inline-block;
  color: var(--color-base-03);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
}

.stay-rating {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-base-04);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
}

.stay-description {
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-600);
  color: var(--color-base-05);
}

@media (max-width: 1280px) {
  .list-stays {
    grid-template-columns: repeat(2, var(--width-lg));
    justify-content: center;
    align-items: top;
  }
}

@media (max-width: 920px) {
  .list-stays {
    grid-template-columns: repeat(2, var(--width-md));
  }

  .stay-img {
    height: var(--height-md);
  }
}

@media (max-width: 768px) {
  .home-header {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .list-stays {
    grid-template-columns: repeat(1, var(--width-md));
    padding: 0 2%;
  }
}

@media (max-width: 768px) {
  .list-stays {
    grid-template-columns: repeat(1, var(--width-sm));
  }

  .stay-img {
    width: var(--width-sm);
    height: var(--height-sm);
  }
}
</style>
