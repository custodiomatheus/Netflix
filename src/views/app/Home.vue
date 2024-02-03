<template>
  <!-- 
    TODO: PARA A PÁGINA DE FILMES
      -> movie/upcoming
      -> movie/top_rated
      -> movie/popular
      -> movie/now_playing

    TODO: PARA A PÁGINA SE SÉRIES
      -> tv/top_rated
      -> tv/popular
      -> tv/airing_today

    TODO: PÁGINA DE PESQUISA
      -> search/multi?query=Marvel+e+&page=1
    -->

  <div class="container container__app">
    <HomeBanner :trendings="bannerTrending" />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import HomeBanner from "@/components/Home/HomeBanner.vue";
import { getMoviePopular, getTvPopular } from "@/service/Tmdb";

import { Tv, Movie, Trending } from "@/types/TmdbType";

const isLoading = ref<boolean>(false);

const popularMovies = ref<Movie[]>([]);
const popularTvs = ref<Tv[]>([]);
const bannerTrending = ref<Trending[]>([]);

const getaBannerTrending = (results: Tv[] | Movie[] = []): void => {
  bannerTrending.value = results.map((result) => Trending.create(result));
};

onBeforeMount(async () => {
  isLoading.value = true;
  const [movies, tvs] = await Promise.all([getMoviePopular(), getTvPopular()]);

  getaBannerTrending([movies.results[0], tvs.results[0]]);

  popularMovies.value = movies.results;
  popularTvs.value = tvs.results;

  isLoading.value = false;
});
</script>
