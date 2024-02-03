<template>
  <section class="banner">
    <swiper
      :loop="loop"
      :effect="effect"
      :modules="modules"
      :slides-per-view="slidesPerView"
      :autoplay="autoPlay"
      :pagination="pagination"
    >
      <slot name="swiper-slide"></slot>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper } from "swiper/vue";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

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
  autoPlay: () => {
    return {
      delay: 12000,
    };
  },
  pagination: () => {
    return {
      enabled: true,
      clickable: true,
    };
  },
});

const modules = [Pagination, Autoplay, EffectFade];
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
