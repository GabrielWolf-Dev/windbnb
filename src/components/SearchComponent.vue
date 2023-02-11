<template>
  <div>
    <div class="search-container">
      <div class="search-wrapper">
        <form class="form" @submit.prevent="searchLocation">
          <fieldset class="fieldset">
            <input
              class="input"
              type="text"
              name="location"
              placeholder="Add location"
              required
              v-model="location"
            />
            <input
              class="input"
              type="number"
              name="guests"
              placeholder="Add guests"
              v-model="guests"
              min="1"
              required
            />
          </fieldset>

          <button class="button" type="submit">Search</button>
        </form>

        <ul class="list-stays" v-if="resultSearch.length !== 0">
          <li
            v-for="(stay, index) in resultSearch"
            :key="`${stay.title}${index}`"
          >
            <router-link
              class="stay-item"
              to="/stay"
              @click="setStaySelected(stay.title)"
            >
              <img
                class="stay-icon"
                src="@/assets/place.svg"
                alt="Place icon"
              />
              <p class="stay-description">
                {{ stay.title }}
                <img class="stay-img" :src="stay.photo" :alt="stay.title" />
                <span class="stay-rate-mb">
                  <img src="@/assets/star-rate.svg" alt="Rating icon" />
                  {{ stay.rating }}
                </span>
              </p>
            </router-link>
          </li>
        </ul>
        <p class="message" v-else>{{ messageSearch }}</p>
      </div>
    </div>

    <aside @click="closeSearch" class="bg-black"></aside>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";

export default {
  name: "SearchComponent",
  data() {
    return {
      location: "",
      guests: 0,
      resultSearch: [],
      messageSearch: "Search some location",
    };
  },
  computed: {
    ...mapState(["data", "staySelected"]),
  },
  methods: {
    closeSearch() {
      store.commit("HANDLE_SEARCH", false);
    },
    searchLocation() {
      const arraySplited = this.location.replace(" ", "").split(",");
      let city, country;
      if (arraySplited.length >= 2) {
        city = arraySplited[0];
        country = arraySplited[1];
      }

      this.data.forEach((stay) => {
        if (
          stay.city === this.location ||
          stay.country === this.location ||
          stay.city === city ||
          (stay.country === country && stay.maxGuests > this.guests)
        ) {
          this.resultSearch.push(stay);
          return;
        }

        this.resultSearch = [];
        this.messageSearch =
          "No place found. Insert city and country in the respective order";
        return;
      });
    },
    setStaySelected(description) {
      const stayFilter = this.resultSearch.filter(
        (stay) => stay.title === description
      )[0];

      store.commit("SET_STAY", stayFilter);
      store.commit("HANDLE_SEARCH", false);
    },
  },
};
</script>

<style scoped>
.search-container {
  width: 100%;
  height: 450px;
  background-color: var(--color-base-01);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.search-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 2%;
}

.bg-black {
  width: 100%;
  height: 100vh;
  display: inline-block;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.fieldset {
  display: flex;
  gap: 20px;
}

.input {
  width: 100%;
  max-width: 300px;
  height: 60px;
  border-radius: 12px;
  border: 1px solid var(--color-base-04);
  padding-left: 16px;
}

.input:first-child {
  margin-right: 20px;
}

.button {
  width: 100%;
  max-width: 120px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--color-primary);
  color: var(--color-base-01);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-700);
}

.message {
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-600);
}

.stay-item {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 20px 0;
  transition: 0.3s;
  border-radius: 12px;
  padding: 8px 2%;
}

.stay-item:hover {
  background-color: #e6e6e6;
}

.stay-description {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  color: var(--color-base-04);
}

.stay-img {
  width: 100px;
  height: 80px;
  border-radius: 12px;
}

.list-stays {
  width: 100%;
  height: 300px;
  overflow-y: auto;
}

.stay-rate-mb {
  display: none;
}

@media (max-width: 768px) {
  .form {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin-bottom: 30px;
  }

  .fieldset {
    flex-direction: column;
    justify-content: center;
  }

  .input {
    height: 40px;
  }

  .list-stays {
    height: 200px;
  }
}

@media (max-width: 520px) {
  .stay-img {
    display: none;
  }

  .stay-item {
    align-items: start;
  }

  .stay-description {
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .stay-rate-mb {
    display: block;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
