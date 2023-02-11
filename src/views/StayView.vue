<template>
  <section>djskjds</section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StayView",
  computed: {
    ...mapState(["staySelected"]),
  },
  created() {
    if (this.staySelected === null) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
