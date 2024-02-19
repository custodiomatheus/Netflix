<template>
  <section class="app">
    <BannerPrimary :trendings="bannerTrending" />

    <div class="app__padding app__list">
      <SliderPrimary
        v-for="moviesItem in moviesList"
        :key="moviesItem.title"
        :title="moviesItem.title"
        :items="moviesItem.items"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Tv, Trending } from "@/types/TmdbType";
import SliderPrimary from "@/components/Slider/SliderPrimary";
import BannerPrimary from "@/components/Banner/BannerPrimary";
import { getTvPopular, getTvAiringToday, getTvTopRated } from "@/service/Tmdb";

const MOVIES_LIST = [
  {
    title: "Séries Populares",
    items: getTvPopular,
  },
  {
    title: "Séries com Melhor Classificação",
    items: getTvTopRated,
  },
  {
    title: "Séries exibidas hoje",
    items: getTvAiringToday,
  },
];

const bannerTrending = ref<Trending[]>([]);

const moviesList = ref<{ title: string; items: Tv[] }[]>([]);

const getBannerTrending = (results: Tv[] = []): void => {
  bannerTrending.value = results.map((result) => Trending.create(result));
};

onBeforeMount(async () => {
  const moviesRequests = MOVIES_LIST.map(async (movieItem) => {
    return {
      title: movieItem.title,
      items: (await movieItem.items()).results,
    };
  });

  moviesList.value = await Promise.all(moviesRequests);

  getBannerTrending([moviesList.value[0].items[0]]);
});
</script>
