import { baseApi } from "~/utils/api";
export default function (id) {
  if (!id) return;
  return baseApi(`movie/${id}`, {}, true);
}
