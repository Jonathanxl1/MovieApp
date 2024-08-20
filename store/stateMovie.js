import { defineStore } from "pinia";

export const useStateMovie = defineStore("stateMovie", {
  state: () => ({
    detailsMovie: {},
    searchResults: [],
  }),
  actions: {
    async setDetails(id) {
      let { data } = await useGetDetails(id);
      this.detailsMovie = data.value;
    },
    restoreDetails() {
      this.detailsMovie = Object.assign({});
    },
    async searchMovies(string) {
      let { data } = await useSearch(string);
      this.searchResults =
        data.value && Object.keys(data.value).length ? toRefs(data.value) : [];
    },
    restoreSearchMovies() {
      this.searchResults = Object.assign({}, []);
    },
  },
});
