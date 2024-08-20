<template>
  <div class="w-full h-auto">
    <h1>Search : {{ term }}</h1>
    <div
      class="w-full h-auto"
      v-if="searchResults && searchResults.results?.length">
      <SearchBarItem
        class="cursor-pointer"
        v-for="(result, idx) in searchResults.results"
        @click="$router.push(`/${result.id}`)"
        :key="idx"
        :srcPoster="result.poster_path"
        :title="result.original_title"
        :overview="result.overview" />
    </div>
    <div class="w-full h-auto" v-else>
      <p>Lo sentimos no encontranos ningun resultado con ese termino</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  const route = useRoute();
  const storeMovie = useStateMovie();

  let existsResults = ref(false);
  const { searchResults = {} } = storeToRefs(useStateMovie());

  const { term } = route.params;

  storeMovie.searchMovies(term).then(() => {
    if (searchResults.value && searchResults.value.length) {
      existsResults.value = true;
    } else {
      existsResults.value = false;
    }
  });

</script>
