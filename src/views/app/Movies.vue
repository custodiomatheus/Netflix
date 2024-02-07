<template>
  <div class="container container__app">
    <BannerPrimary :trendings="bannerTrending" />

    <div class="home__list">
      <SliderPrimary
        v-for="moviesItem in moviesList"
        :key="moviesItem.title"
        :title="moviesItem.title"
        :items="moviesItem.items"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Movie, Trending } from "@/types/TmdbType";
import SliderPrimary from "@/components/Slider/SliderPrimary";
import BannerPrimary from "@/components/Banner/BannerPrimary";
import { getMoviePopular, getMovieUpcoming, getMovieTopRated, getMovieNowPlaying } from "@/service/Tmdb";

const MOVIES_LIST = [
  {
    title: "Filmes Populares",
    items: getMoviePopular,
  },
  {
    title: "Filmes mais bem avaliados",
    items: getMovieTopRated,
  },
  {
    title: "Filmes que estreiam em breve",
    items: getMovieUpcoming,
  },
  {
    title: "Filmes Em Exibição",
    items: getMovieNowPlaying,
  },
];

const isLoading = ref<boolean>(false);

const bannerTrending = ref<Trending[]>([]);

const moviesList = ref<{ title: string; items: Movie[] }[]>([]);

const getBannerTrending = (results: Movie[] = []): void => {
  bannerTrending.value = results.map((result) => Trending.create(result));
};

onBeforeMount(async () => {
  isLoading.value = true;

  const moviesRequests = MOVIES_LIST.map(async (movieItem) => {
    return {
      title: movieItem.title,
      items: (await movieItem.items()).results,
    };
  });

  moviesList.value = await Promise.all(moviesRequests);

  getBannerTrending([moviesList.value[0].items[0]]);

  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.home__list {
  display: flex;
  flex-direction: column;
  gap: 96px;
}
</style>
