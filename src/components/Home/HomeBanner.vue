<template>
  <section class="banner">
    <BaseSwiper :pagination="{ enabled: false }" effect="fade">
      <template #swiper-slide>
        <swiper-slide
          v-for="trending in trendings"
          :key="trending.id"
          :style="[{ 'background-image': `url(${TMDB_IMAGE_URL}w1280/${trending.backdrop_path})` }]"
        >
          <div class="banner__shadow"></div>
          <div class="banner__infos">
            <h1>{{ trending?.title || trending?.name }}</h1>
            <p>{{ limitString(trending.overview, 200) }}</p>
          </div>
        </swiper-slide>
      </template>
    </BaseSwiper>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import { Trending } from "@/types/TmdbType";
import { limitString } from "@/helpers/handleStrigs";
import BaseSwiper from "@/components/Base/BaseSwiper";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

defineProps<{ trendings: Trending[] }>();
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
