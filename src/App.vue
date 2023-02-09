<template>
  <div class="container">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-base-01);
}

#app {
  font-family: "Montserrat", sans-serif;
  /* font-family: 'Mulish', sans-serif; */

  --color-primary: #eb5757;
  --color-base-01: #ffffff;
  --color-base-02: #bdbdbd;
  --color-base-03: #828282;
  --color-base-04: #4f4f4f;
  --color-base-05: #333333;
  --bg-modal: rgba(79, 79, 79, 0.4);
  --box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  --font-weight-400: 400;
  --font-weight-500: 500;
  --font-weight-600: 600;
  --font-weight-700: 700;
  --font-weight-800: 800;

  --font-size-9: 0.563rem;
  --font-size-10: 0.625rem;
  --font-size-12: 0.75rem;
  --font-size-14: 0.875rem;
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  --font-size-24: 1.5rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button,
input[type="submit"] {
  border: 0;
  background: transparent;
  cursor: pointer;
}

input {
  outline-color: var(--color-primary);
}

textarea {
  resize: none;
}

/* Default Styles */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 2%;
  position: relative;
}
</style>
