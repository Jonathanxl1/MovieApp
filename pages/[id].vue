<template>
  <div
    class="sm:w-full sm:h-screen sm:flex sm:flex-col sm:items-center sm:columns-1 lg:w-full lg:h-8/12 lg:columns-2 lg:flex lg:flex-row px-10">
    <div class="lg:w-2/4 lg:h-full lg:aspect-square">
      <!-- <PosterView srcPath=""> -->
      <Image
        :src="getSrcImage(detailsMovie.poster_path)"
        imageClass="h-full " />
    </div>

    <div class="sm:flex sm:justify-start lg:w-2/4 flex-col lg:space-y-3 h-full">
      <div>
        <h1 class="text-2xl">{{ detailsMovie.original_title }}</h1>
      </div>
      <div>
        <i class="pi pi-star-fill text-yellow-400"></i>
        <span class="font-bold">Rating:</span> {{ detailsMovie.vote_average }}
      </div>
      <div>
        <span class="font-bold"> Realese :</span>
        {{ detailsMovie.release_date }}
      </div>
      <div>{{ detailsMovie.overview }}</div>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
  const { detailsMovie } = storeToRefs(useStateMovie());
</script>
