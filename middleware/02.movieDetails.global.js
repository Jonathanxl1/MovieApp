export default defineNuxtRouteMiddleware((to, from) => {
  const stateMovie = useStateMovie();

  if (to.name == "id" && to.params.id) {
    stateMovie.setDetails(to.params.id);
  }

  if (from.name != to.name) {
    stateMovie.restoreDetails();
  }
});
