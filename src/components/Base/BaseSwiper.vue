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
      <!-- <swiper-slide>
        <div class="banner__shadow"></div>
        <div class="banner__infos">
          <h1>{{ bannerTrending.title }}</h1>
          <p>{{ bannerTrending.overview }}</p>
        </div>
      </swiper-slide> -->
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const modules = [Pagination, Autoplay, EffectFade];

interface Props {
  loop?: boolean;
  effect?: string;
  slidesPerView?: number;
  autoPlay: {
    delay: number;
  };
  pagination: {
    enabled?: boolean;
    clickable?: boolean;
  };
}

withDefaults(defineProps<Props>(), {
  loop: true,
  effect: "",
  slidesPerView: 1,
  // autoPlay: () => {
  //   return {
  //     delay: 12000,
  //   };
  // },
  pagination: () => {
    return {
      enabled: true,
      clickable: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;

  .swiper-slide {
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
