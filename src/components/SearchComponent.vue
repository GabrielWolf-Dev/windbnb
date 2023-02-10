<template>
  <div>
    <div class="search-container">
      <form @submit.prevent="searchLocation">
        <input type="text" name="location" required v-model="location" />
        <input type="number" name="guests" v-model="guests" min="1" required />

        <button type="submit">Search</button>
      </form>

      <ul v-if="resultSearch.length !== 0">
        <li v-for="stay in resultSearch" :key="stay.id">
          <img src="@/assets/place.svg" alt="Place icon" />
          <p>
            {{ stay.title }}
            <img :src="stay.photo" alt="" width="100" height="80">
          </p>
        </li>
      </ul>
      <p v-else>{{ messageSearch }}</p>
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
    ...mapState(["data"]),
  },
  methods: {
    closeSearch() {
      store.commit("HANDLE_SEARCH", false);
    },
    searchLocation() {
      this.data.filter((stay) => {
        const [city, country] = this.location.replace(" ", "").split(",");

        if (
          stay.city === city &&
          stay.country === country &&
          stay.maxGuests > this.guests
        ) {
          this.resultSearch.push(stay);
          console.log(this.resultSearch);
          console.log("asa");

          return stay;
        }

        this.resultSearch = [];
        this.messageSearch = "No place found :(";
        return stay;
      });
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
</style>
