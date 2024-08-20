<template>
  <AutoComplete
    class="lg:w-2/4 flex sm:w-3/4"
    unstyled
    placeholder="Busca peliculas o Series ..."
    inputClass="w-full h-10 rounded-lg p-2 focus:border-yellow-400 focus:border-4 "
    dropdownClass="flex w-3/4 text-yellow bg-red-300"
    panelClass="w-2/4 bg-gray-400 overflow-y-auto scroll-m-0 transition duration-300 transition transition-all"
    v-model="search"
    :loading="isSearch"
    :suggestions="results"
    variant="filled"
    emptySearchMessage="No se han encontrado resultados"
    @option-select="cleanField"
    @keyup.enter="
      () => {
        if (!!search) $router.push(`/search/${search}`);
        cleanField();
      }
    "
    @complete="searchMovies"
    pt:loader:class="text-yellow-400 -ml-10">
    <template #option="{ option }">
      <div
        class="w-full bg-gray-400 text-black cursor-pointer my-5 hover:bg-gray-600">
        <SearchBarItem
          @click="
            () => {
              $router.push(`/${option.id}`);
              cleanField();
            }
          "
          :srcPoster="option.poster_path"
          :title="option.original_title"
          :overview="option.overview" />
      </div>
    </template>
  </AutoComplete>
</template>

<script setup lang="ts">
  //@ts-check
  let search = ref("");
  let isSearch = ref<Ref<boolean> | boolean>(false);
  let results = ref<Array<Object>>([]);
  let debounce = ref<number | null | ReturnType<typeof setTimeout>>(null);

  function cleanField() {
    search.value = "";
    results.value.splice(0, results.value.length);
  }

  function searchMovies() {
    {
      let newValue = search.value;
      if (debounce.value) {
        clearTimeout(debounce.value);
        debounce.value = null;
      }
      if (!newValue || (newValue && newValue.length <= 3)) {
        isSearch.value = false;
        results.value.splice(0, results.value.length);
        return;
      }
      isSearch.value = true;

      debounce.value = setTimeout(async () => {
        await useSearch(newValue as string).then(
          ({ data }: { data: { value: any } }) => {
            results = toRef(data.value, "results");
            isSearch.value = false;
          }
        );
        isSearch.value = false;
      }, 800);
    }
  }
</script>
