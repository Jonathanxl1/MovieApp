<template>
  <nav
    class="h-15 w-screen bg-slate-800 p-1 flex items-center space-x-14 items-end">
    <NuxtLink to="/">
      <div class="container w-20 h-20">
        <Image class="w-auto h-auto" src="/img/logo.png" />
      </div>
    </NuxtLink>
    <SearchBar />
    <Button
      v-for="link in links"
      :key="link.name"
      :label="link.name"
      link
      unstyled
      class="text-white hover:text-yellow-400 hover:cursor-pointer hover:underline" />
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
