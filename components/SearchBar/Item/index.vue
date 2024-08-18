<template>
  <div class="px-2 py-2 flex space-x-2 items-center">
    <div class="w-1/4 mr-5">
      <Image
        imageClass="w-3/5 h-auto aspect-square rounded rounded-lg"
        :src="getSrcImage(srcPoster)" />
    </div>
    <div class="w-3/4 flex flex-col justify-start">
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
