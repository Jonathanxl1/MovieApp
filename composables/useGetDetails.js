import { baseApi } from "~/utils/api";

export default function () {
  return function (id) {
    if (!id) return;
    return baseApi(id, { query: string });
  };
}
