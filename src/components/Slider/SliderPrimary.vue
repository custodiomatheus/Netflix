<template>
  <section class="slider">
    <h2>{{ title }}</h2>

    <BaseSwiper :space-between="32" :slides-per-view="4" :auto-play="{ enabled: false }" :navigation="true">
      <template #swiper-slide>
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="`${TMDB_IMAGE_URL}w400/${item.poster_path}`" :alt="item.overview" loading="lazy" />
          <h4>{{ item?.title || item?.name }}</h4>
        </swiper-slide>
      </template>
    </BaseSwiper>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import BaseSwiper from "@/components/Base/BaseSwiper";
import { Tv, Movie, Trending } from "@/types/TmdbType";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

defineProps<{
  title?: string;
  items?: Tv | Movie;
}>();
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  img {
    width: 100%;
    height: 450px;
    border-radius: $border-radius;
    margin-bottom: 16px;
  }

  h2,
  h4 {
    color: $white;
  }

  h2 {
    margin-bottom: 32px;
  }
}
</style>
