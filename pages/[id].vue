<template>
  <div class="w-full h-8/12 columns-2 flex px-10">
    <div class="w-2/4 h-full aspect-square">
      <!-- <PosterView srcPath=""> -->
      <Image
        :src="getSrcImage(detailsMovie.poster_path)"
        imageClass="h-full " />
    </div>

    <div class="w-2/4 flex flex-col space-y-3">
      <div>
        <h1>{{ detailsMovie.original_title }}</h1>
      </div>
      <div>
        <i class="pi pi-star-fill"></i>
        Rating: {{ detailsMovie.vote_average }}
      </div>
      <div></div>
      <div>{{ detailsMovie.overview }}</div>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
  const { detailsMovie } = storeToRefs(useStateMovie());
</script>
