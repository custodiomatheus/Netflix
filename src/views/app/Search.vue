<template>
  <section class="app app__padding">
    <h1>Resultados da procura por: {{ valueSearch }}</h1>
    <span v-show="!isLoading">{{ searchTotalResults }} itens</span>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { debounce } from "underscore";
import { Tv, Movie } from "@/types/TmdbType";
import { LocationQueryValue } from "vue-router";
import { getSearchMulti } from "@/service/Tmdb";
import useNavigate from "@/composables/useNavigate";

const { getQueryParam, handlePageNavigation } = useNavigate();

const isLoading = ref<boolean>(true);
const searchTotalResults = ref(0);
const searchResults = ref<Tv[] | Movie[]>([]);

const valueSearch = computed<LocationQueryValue | LocationQueryValue[]>(() => getQueryParam("s"));

const getSearchValue = debounce(async () => {
  isLoading.value = true;

  const response = await getSearchMulti(valueSearch.value);

  searchResults.value = response.results;
  searchTotalResults.value = response.total_results;

  isLoading.value = false;
}, 2000);

watch(
  () => valueSearch.value,
  () => {
    if (!valueSearch.value) {
      handlePageNavigation({ name: "Home" });

      return;
    }

    getSearchValue();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.app__padding {
  padding: calc($header-height-size-2 + 32px) $padding-horizontal-desktop;

  h1 {
    color: $white;
    margin-bottom: 16px;
  }

  span {
    color: $gray-700;
  }
}
</style>
