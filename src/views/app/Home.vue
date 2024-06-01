<template>
  <section class="app">
    <BannerPrimary :trendings="bannerTrending" />

    <div class="app__padding app__list">
      <SliderPrimary v-if="popularMovies.length" title="Filmes Populares" :items="popularMovies" />

      <SliderPrimary v-if="popularTvs.length" title="Séries Populares" :items="popularTvs" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { Tv, Movie, Trending } from "@/types/TmdbType";
import SliderPrimary from "@/components/Slider/SliderPrimary";
import BannerPrimary from "@/components/Banner/BannerPrimary";
import { getMoviePopular, getTvPopular } from "@/service/Tmdb";

const store = useStore();

const popularTvs = ref<Tv[]>([]);
const popularMovies = ref<Movie[]>([]);

const bannerTrending = computed(() => store.getters["content/getTrendings"]);

const trendingTransform = (results: Tv[] | Movie[] = []): Trending[] => {
  return results.map((result) => Trending.create(result));
};

onBeforeMount(async () => {
  const [movies, tvs] = await Promise.all([getMoviePopular(), getTvPopular()]);

  popularMovies.value = movies.results;
  popularTvs.value = tvs.results;

  store.commit("content/SET_TRENDINGS", {
    trendings: trendingTransform([movies.results[0], tvs.results[0], movies.results[1], tvs.results[1]]),
  });
});
</script>

<style lang="scss" scoped>
.home__list {
  display: flex;
  flex-direction: column;
  gap: 96px;
}
</style>
