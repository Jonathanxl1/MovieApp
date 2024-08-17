export async function baseApi(endpoint = "", params = {}) {
  const config = useRuntimeConfig();
  const { api, tokenAccess } = config.public;
  await useFetch(api + `${endpoint}`, {
    params,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenAccess}`,
    },
  });
}
