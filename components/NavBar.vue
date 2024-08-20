<template>
  <nav class="h-15 w-full bg-slate-800 py-3 px-1 flex items-center space-x-5">
    <NuxtLink to="/">
      <div class="container w-20 h-20">
        <Image class="w-auto h-auto" src="/img/logo.png" />
      </div>
    </NuxtLink>
    <SearchBar />
    <Button
      label="login"
      link
      unstyled
      class="text-white hover:text-yellow-400 hover:cursor-pointer hover:underline" />
  </nav>
</template>
