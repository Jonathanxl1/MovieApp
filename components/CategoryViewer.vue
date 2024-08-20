<template>
  <div class="flex w-full h-1/4 flex-col my-24">
    <div>
      <h2
        class="lg:text-left lg:my-20 sm:text-center sm:mx-auto text-2xl bg-gradient-to-r from-yellow-400 from-50% text-white p-5">
        {{ category }}
      </h2>
    </div>
    <div class="flex flex-row w-full h-full py-10 mx-auto">
      <Carousel
        class="w-full"
        containerClass="relative w-full "
        contentClass="w-full mx-auto"
        :value="results"
        :numVisible="3"
        :circular="true"
        :numScroll="3"
        :responsiveOptions="responsiveOptions">
        <template #item="{ data }">
          <PosterView
            class="mx-8 min-h-24"
            @click="$router.push(`/${data.id}`)"
            :srcPoster="data.poster_path"
            :title="data.original_title"
            :rating="data.vote_average" />
        </template>
      </Carousel>
    </div>
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
