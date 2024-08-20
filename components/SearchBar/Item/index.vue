<template>
  <div
    class="flex flex-col sm:w-96 lg:flex-row lg:w-3/4 lg:px-2 lg:py-2 lg:flex lg:space-x-2 lg:items-center">
    <div class="sm:w-1/4 lg:w-1/4 lg:mr-5 flex lg:justify-center">
      <Image
        class="sm:w-1/4 lg:w-full"
        imageClass="w-1/4 sm:w-2/4 lg:w-full h-auto lg:aspect-square rounded rounded-lg mx-auto"
        :src="getSrcImage(srcPoster)" />
    </div>
    <div class="sm:w-1/4 lg:w-3/4 flex flex-col justify-start">
      <span class="text-left"> {{ title }} </span>
      <span>{{ overview }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      srcPoster: String,
      title: String,
      overview: String,
    },
  };
</script>
