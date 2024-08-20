<template>
  <div class="flex w-full h-72 flex-col mb-96">
    <h2 class="text-left m-20">{{ category }}</h2>
    <Carousel
      containerClass="flex flex-row mx-5"
      :value="results"
      :numVisible="3"
      :circular="true"
      :numScroll="3"
      :responsiveOptions="responsiveOptions">
      <template #item="{ data }">
        <PosterView
          class="mx-8"
          @click="$router.push(`/${data.id}`)"
          :srcPoster="data.poster_path"
          :title="data.original_title"
          :rating="data.vote_average" />
      </template>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
  const responsiveOptions = ref([
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
  let results = ref<Array<{}>>([]);

  const props = withDefaults(defineProps<{ category: string; id: number }>(), {
    category: "",
    id: 0,
  });

  let { data } = await useTopMovieByCategory(props.id);
  if (data && data.value) {
    results = toRef(data.value, "results");
  }
</script>
