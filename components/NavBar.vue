<template>
  <nav
    class="lg:h-15 lg:w-screen bg-slate-800 lg:flex lg:flex-row lg:items-center lg:justify-evenly sm:w-full sm:h-auto sm:flex sm:px-5 sm:flex-col sm:justify-center">
    <NuxtLink to="/" class="sm:w-2/12 h-auto lg:w-2/12">
      <div
        class="lg:container lg:w-20 lg:h-20 sm:w-full sm:h-8 sm:flex sm:justify-center">
        <Image
          class="lg:w-auto lg:h-auto sm:w-12 sm:h-auto"
          imageClass="w-1/4 sm:w-1/4 mx-auto lg:w-full"
          src="/img/logo.png" />
      </div>
    </NuxtLink>
    <SearchBar class="sm:1/4 lg:w-6/12 sm:mx-4" />
    <i class="lg:hidden sm:block sm:pi sm:pi-bars text-yellow-400"></i>
    <div class="lg:flex lg:flex-row lg:space-x-5">
      <Button
        v-for="link in links"
        :key="link.name"
        :label="link.name"
        link
        unstyled
        class="text-white hover:text-yellow-400 hover:cursor-pointer hover:underline mx-1" />
    </div>
  </nav>
</template>
<script setup lang="ts">
  const links = ref([
    {
      name: "Category",
      icon: "pi pi-th-large",
    },
    {
      name: "New Realeses",
      icon: "pi pi-calendar",
    },
    {
      name: "Popular",
      icon: "pi pi-star",
    },
    {
      name: "Blog",
      icon: "pi pi-info-circle",
    },
  ]);
</script>
