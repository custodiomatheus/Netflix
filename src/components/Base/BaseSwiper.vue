<template>
  <swiper
    :loop="loop"
    :effect="effect"
    :grabCursor="true"
    :modules="modules"
    :autoplay="autoPlay"
    :pagination="pagination"
    :navigation="navigation"
    :space-between="spaceBetween"
    :slides-per-view="slidesPerView"
  >
    <slot name="swiper-slide"></slot>
  </swiper>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper } from "swiper/vue";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";

interface Props {
  loop?: boolean;
  effect?: string;
  spaceBetween?: number;
  slidesPerView?: number;
  autoPlay?: {
    enabled?: boolean;
    delay: number;
  };
  pagination?: {
    enabled?: boolean;
    clickable?: boolean;
  };
  navigation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loop: true,
  effect: "",
  slidesPerView: 1,
  autoPlay: () => {
    return {
      enabled: true,
      delay: 12000,
    };
  },
  pagination: () => {
    return {
      enabled: false,
      clickable: true,
    };
  },
  navigation: false,
});

const modules = [Pagination, Autoplay, EffectFade, Navigation];
</script>
