import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
    isOpenSearch: false,
    staySelected: null,
  },
  getters: {},
  mutations: {
    GET_DATA(state, payload) {
      state.data = payload;
    },
    HANDLE_SEARCH(state, payload) {
      state.isOpenSearch = payload;
    },
    SET_STAY(state, payload) {
      state.staySelected = payload;
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
