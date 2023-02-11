<template>
  <div>About the project</div>
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

<style scoped></style>
