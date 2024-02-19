<template>
  <section class="app app__padding">
    <h1>Resultados da procura por: {{ valueSearch }}</h1>
    <span>{{ searchTotalResults }} itens</span>

    <ul>
      <li v-for="item in searchResults" :key="item.id">
        <CardPrimary
          :overview="item.overview"
          :title="item?.title || item?.name"
          :poster_path="`${TMDB_IMAGE_URL}w400/${item.poster_path}`"
        />
      </li>
    </ul>

    <BaseIntersectionObserver
      v-if="searchTotalPages > 1"
      entries-property="isIntersecting"
      @is-in-screen="loadContent"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { debounce } from "underscore";
import { LocationQueryValue } from "vue-router";
import { getSearchMulti } from "@/service/Tmdb";
import useNavigate from "@/composables/useNavigate";
import CardPrimary from "@/components/Card/CardPrimary";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";
import BaseIntersectionObserver from "@/components/Base/BaseIntersectionObserver";

const store = useStore();
const { getQueryParam, handlePageNavigation } = useNavigate();

const currentPage = ref(1);
const searchTotalPages = ref(0);

const searchResults = computed(() => store.getters["content/getSearchResult"].results);
const searchTotalResults = computed(() => store.getters["content/getSearchResult"].total_results);
const valueSearch = computed<LocationQueryValue | LocationQueryValue[]>(() => getQueryParam("s"));

const loadContent = async () => {
  if (currentPage.value < searchTotalPages.value) {
    currentPage.value += 1;

    const response = await getSearchMulti({ query: valueSearch.value, page: currentPage.value });
    store.commit("content/SET_SEARCH_RESULT_APPEND", {
      results: response.results,
    });
  }
};

const getSearchValue = debounce(async () => {
  currentPage.value = 1;

  const response = await getSearchMulti({ query: valueSearch.value, page: currentPage.value });

  searchTotalPages.value = response.total_pages;

  store.commit("content/SET_SEARCH_RESULT", {
    searchResult: { results: response.results, total_results: response.total_results },
  });
}, 2000);

onBeforeUnmount(() => {
  store.commit("content/SET_SEARCH_RESULT", {
    searchResult: { results: [], total_results: 0 },
  });
});

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

  ul {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    background-color: darkblue;
    // min-height: calc((450px + 32px) * 2);
  }
}
</style>
