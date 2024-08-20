export default defineNuxtRouteMiddleware((to, from) => {
  const stateUi = useStateUi();
  stateUi.setLoading(true);
  setTimeout(() => {
    stateUi.setLoading(false);
  }, 2000);
});
