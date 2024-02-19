<template>
  <section class="slider">
    <h2>{{ title }}</h2>

    <BaseSwiper :space-between="32" :slides-per-view="4" :auto-play="{ enabled: false }" :navigation="true">
      <template #swiper-slide>
        <swiper-slide v-for="item in items" :key="item.id">
          <CardPrimary
            :overview="item.overview"
            :title="item?.title || item?.name"
            :poster_path="`${TMDB_IMAGE_URL}w400/${item.poster_path}`"
          />
        </swiper-slide>
      </template>
    </BaseSwiper>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import BaseSwiper from "@/components/Base/BaseSwiper";
import { Tv, Movie, Trending } from "@/types/TmdbType";
import CardPrimary from "@/components/Card/CardPrimary";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

defineProps<{
  title?: string;
  items?: Tv | Movie;
}>();
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  h2 {
    color: $white;
    margin-bottom: 32px;
  }
}
</style>
