<template>
  <section class="banner">
    <swiper
      loop
      effect="fade"
      :modules="modules"
      :slides-per-view="1"
      :autoplay="{ delay: 12000 }"
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="bannerTrending in bannerTrendings"
        :key="bannerTrending.id"
        :style="[{ 'background-image': `url(${TMDB_URL}w1280/${bannerTrending.backdrop_path})` }]"
      >
        <div class="banner__shadow"></div>
        <div class="banner__infos">
          <h1>{{ bannerTrending.title }}</h1>
          <p>{{ bannerTrending.overview }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { TMDB_URL } from "@/helpers/constants/urls";
import { limitString } from "@/helpers/handleStrigs";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { trendingAll } from "@/helpers/constants/mocks";

const modules = ref([Pagination, Autoplay, EffectFade]);

const bannerTrendings = computed(() => {
  return trendingAll.results
    .filter((result) => result.id && result.backdrop_path && result?.title && result.overview)
    .slice(0, 3)
    .map(({ id, backdrop_path, title, overview }) => {
      return {
        id,
        backdrop_path,
        title,
        overview: limitString(overview, 200),
      };
    });
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  height: 95vh;

  &__infos {
    width: 500px;
    height: 200px;
    position: absolute;
    padding: 0 $padding-vertical-desktop;
    bottom: 100px;

    h1,
    p {
      color: $white;
    }

    p {
      line-height: 140%;
    }
  }

  &__shadow {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba($black, 0.8) 20%, rgba($black, 0.6) 50%, transparent 100%);
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
