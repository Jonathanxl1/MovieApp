import { baseApi } from "~/utils/api";

export default function (generId = 0) {
  return baseApi(
    "discover/movie",
    { with_genres: generId, sort_by: "popularity.desc", limit: 10 },
    true
  );
}
