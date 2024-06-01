<template>
  <section class="banner">
    <BaseSwiper effect="fade">
      <template #swiper-slide>
        <swiper-slide v-for="trending in trendings" :key="trending.id">
          <img :src="`${TMDB_IMAGE_URL}w300/${trending.backdrop_path}`" loading="lazy" />
          <img :src="`${TMDB_IMAGE_URL}w1280/${trending.backdrop_path}`" loading="lazy" />

          <div class="banner__infos">
            <h1>{{ trending?.title || trending?.name }}</h1>

            <div class="banner__infos--details">
              <span class="releaseDate">
                {{ formatReleaseDate(trending?.release_date || trending?.first_air_date) }}
              </span>
              <span
                :class="['average', `average${Math.round(trending.vote_average) > 5 ? '--positive' : '--negative'}`]"
              >
                {{ Math.round(trending.vote_average) }} pontos
              </span>
            </div>

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

const formatReleaseDate = (date: number | undefined) => {
  if (!date) return "";
  const formatter = new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "numeric" });

  return formatter.format(new Date(`${date}T00:00:00`));
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: calc(75vh + $header-height-size-2);
  position: relative;

  &__infos {
    width: 50%;
    padding: 0 $padding-horizontal-desktop;
    position: absolute;
    top: 50%;
    z-index: 3;
    transform: translate(0, -50%);

    h1,
    p,
    span {
      color: $white;
    }

    h1 {
      font-size: 48px;
      font-weight: 500;
    }

    p {
      line-height: 140%;
    }

    &--details {
      display: flex;
      gap: 16px;
      margin: 16px 0 32px;

      .releaseDate {
        color: $white;
      }

      .average,
      .releaseDate {
        font-weight: 600;
      }

      .average--positive {
        color: $green;
      }
      .average--negative {
        color: $red;
      }
    }
  }

  &__shadow {
    width: 55%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background: linear-gradient(90deg, $black 60%, rgba($black, 1) 80%, transparent 100%);
  }

  img {
    height: 100%;
    width: 60%;
    position: absolute;
    right: 0;
    z-index: 1;
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
