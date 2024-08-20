import { defineStore } from "pinia";
//@ts-check
export const useStateUi = defineStore("stateUi", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(value) {
      this.loading = value;
    },
  },
});
