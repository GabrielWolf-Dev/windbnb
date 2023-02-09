import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    GET_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async getData(context) {
      const URL = `https://raw.githubusercontent.com/GabrielWolf-Dev/windbnb/main/api/data.json`;
      const response = await fetch(URL);
      const data = await response.json();

      context.commit("GET_DATA", data);
    },
  },
  modules: {},
});
