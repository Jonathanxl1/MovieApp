<template>
  <nav class="h-15 w-full bg-slate-800 py-3 px-1 flex items-center space-x-5">
    <NuxtLink to="/">
      <div class="container w-20 h-20">
        <Image class="w-auto h-auto" src="./img/logo.png" />
      </div>
    </NuxtLink>

    <AutoComplete
      class="w-3/4"
      unstyled
      placeholder="Busca peliculas o Series ..."
      inputClass="w-full h-10 rounded-lg p-2 focus:border-yellow-400 focus:border-4 "
      v-model="search"
      fluid>
    </AutoComplete>
    <Button
      label="login"
      link
      unstyled
      class="text-white hover:text-yellow-400 hover:cursor-pointer hover:underline" />
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        search: "",
        debounce: null,
      };
    },
    methods: {
      searchMovie: useSearch(),
    },
    watch: {
      search(newValue) {
        if (this.debounce) {
          clearTimeout(debounce);
        }
        this.debounce = setTimeout(() => {
          this.searchMovie(newValue);
        }, 800);
      },
    },
  };
</script>
