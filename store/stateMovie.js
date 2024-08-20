import { defineStore } from "pinia";

export const useStateMovie = defineStore("stateMovie", {
  state: () => ({
    detailsMovie: {},
  }),
  actions: {
    async setDetails(id) {
      let { data } = await useGetDetails()(id);
      this.detailsMovie = data.value;
    },
    restoreDetails() {
      this.detailsMovie = Object.assign({});
    },
  },
});
