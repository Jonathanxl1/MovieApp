import { baseApi } from "~/utils/api";

export default function (string = "") {
  return baseApi("search/movie", { query: string }, true);
}
