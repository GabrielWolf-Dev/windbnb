<template>
  <section class="stay">
    <img class="stay-img" :src="staySelected.photo" :alt="staySelected.title" />
    <main class="description">
      <span class="super-host" v-if="staySelected.superHost">SUPER HOST</span>
      <div class="wrapper-location">
        {{ `${staySelected.city} | ${staySelected.country} | ` }}
        <span class="rating">
          <img src="@/assets/star-rate.svg" alt="Sar icon" />
          {{ staySelected.rating }}
        </span>
      </div>
      <p class="text">Up to {{ staySelected.maxGuests }} people</p>
      <p class="text">{{ staySelected.beds }} beds</p>
      <p class="text bold">Type: {{ staySelected.type }}</p>

      <p class="desc">{{ staySelected.title }}</p>
    </main>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StayView",
  computed: {
    ...mapState(["staySelected"]),
  },
  created() {
    document.title = `Windbnb | Stay in ${this.staySelected.city}`;
  },
};
</script>

<style scoped>
.stay {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
}

.stay-img {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.super-host {
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 16px;
  border: 1px solid var(--color-base-04);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-700);
  text-transform: uppercase;
  display: inline-block;
  margin-right: 12px;
}

.wrapper-location {
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-600);
  color: var(--color-base-05);
  display: flex;
  gap: 6px;
  align-items: center;
}

.rating {
  display: flex;
  gap: 6px;
  align-items: center;
}

.text {
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
  color: var(--color-base-04);
}

.bold {
  font-weight: var(--font-weight-600);
}

.description {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.desc {
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
  color: var(--color-base-03);
  margin-top: 20px;
}

@media (max-width: 768px) {
  .stay {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 420px) {
  .stay {
    gap: 20px;
  }

  .description {
    gap: 8px;
  }
  .super-host {
    font-size: var(--font-size-9);
  }
  .wrapper-location {
    font-size: var(--font-size-14);
  }
  .text {
    font-size: var(--font-size-12);
  }

  .desc {
    font-size: var(--font-size-14);
    margin-top: 12px;
  }
}
</style>
