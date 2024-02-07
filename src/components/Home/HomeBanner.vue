<template>
  <section class="banner">
    <BaseSwiper effect="fade">
      <template #swiper-slide>
        <swiper-slide
          v-for="trending in trendings"
          :key="trending.id"
          :style="[{ 'background-image': `url(${TMDB_IMAGE_URL}w1280/${trending.backdrop_path})` }]"
        >
          <div class="banner__infos">
            <h1>{{ trending?.title || trending?.name }}</h1>
            <p>{{ limitString(trending.overview, 400) }}</p>
          </div>

          <div class="banner__shadow"></div>
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
  height: calc(65vh + $header-height-size-2);
  position: relative;

  &__infos {
    width: 50%;
    padding: 0 $padding-horizontal-desktop;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    h1,
    p {
      color: $white;
    }

    h1 {
      font-size: 48px;
      font-weight: 500;
    }

    p {
      line-height: 140%;
    }
  }

  &__shadow {
    width: 55%;
    height: 100%;
    background: linear-gradient(90deg, $black 60%, rgba($black, 1) 80%, transparent 100%);
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      background-size: 60% 100%;
      background-position: right 0;
      background-repeat: no-repeat;
    }
  }
}
</style>
