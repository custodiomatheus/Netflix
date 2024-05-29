<template>
  <Transition>
    <ModalPrimary v-if="modalInfo.show" :item="modalInfo.data" @closeModal="handleModal" />
  </Transition>

  <section class="slider">
    <h2>{{ title }}</h2>

    <BaseSwiper :space-between="32" :slides-per-view="4.5" :auto-play="{ enabled: false }" :navigation="true">
      <template #swiper-slide>
        <swiper-slide v-for="item in items" :key="item.id">
          <CardPrimary
            :overview="item.overview"
            :title="item?.title || item?.name"
            :poster_path="`${TMDB_IMAGE_URL}w400/${item.poster_path}`"
            @buttonClick="handleModal(true, item)"
          />
        </swiper-slide>
      </template>
    </BaseSwiper>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SwiperSlide } from "swiper/vue";
import { Tv, Movie } from "@/types/TmdbType";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";
import BaseSwiper from "@/components/Base/BaseSwiper.vue";
import CardPrimary from "@/components/Card/CardPrimary.vue";
import ModalPrimary from "@/components/Modal/ModalPrimary.vue";

defineProps<{
  title?: string;
  items?: Tv | Movie;
}>();

const modalInfo = ref({
  show: false,
  data: {},
});

const handleModal = (show = false, item = {}) => {
  modalInfo.value.show = show;
  modalInfo.value.data = item;
};
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
