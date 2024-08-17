import { baseApi } from "~/utils/api";

export default function () {
  return function (string = "") {
    return baseApi("search/movie", { query: string });
  };
}
