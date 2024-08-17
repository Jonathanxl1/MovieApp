<template>
  <Carousel
    :value="movies"
    :numVisible="1"
    :numScroll="1"
    :responsiveOptions="breakpoints"
    circular
    :autoplayInterval="2000"
    contentClass="overflow-y-hidden"
    containerClass="aspect-video flex overflow-y-hidden">
    <template #item="{ data }">
      <Card v-if="data && data.src">
        <template #header>
          <Image :src="data.src" class="w-full h-full" />
        </template>
        <template #content>
          <h4 class="text-center">{{ data.name }}</h4>
        </template>
      </Card>
    </template>
  </Carousel>
</template>
<script>
  export default {
    props: {
      movies: { type: Array, default: () => [] },
    },
    data() {
      return {
        breakpoints: [
          {
            breakpoint: "1400px",
            numVisible: 1,
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
        ],
      };
    },
  };
</script>
