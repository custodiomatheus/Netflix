<template>
  <BaseModal @closeModal="emits('closeModal')">
    <div class="modalPrimary flexContainer">
      <div class="modalPrimary__info flexContainer--small">
        <h1>{{ item?.title }}</h1>

        <div class="flexContainer--small">
          <span class="releaseDate">{{ releaseDateFormatted }}</span>
          <span :class="['average', `average${voteAverageFormatter > 5 ? '--positive' : '--negative'}`]">
            {{ voteAverageFormatter }} pontos
          </span>
        </div>

        <span>{{ item?.overview }}</span>
      </div>

      <div class="modalPrimary__images">
        <img :src="`${TMDB_IMAGE_URL}w300/${item?.backdrop_path}`" />
        <img :src="`${TMDB_IMAGE_URL}w1280/${item?.backdrop_path}`" class="modalPrimary__images--big" />
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Tv, Movie } from "@/types/TmdbType";
import BaseModal from "@/components/Base/BaseModal.vue";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

const emits = defineEmits(["closeModal"]);

const props = defineProps<{
  item: Tv | Movie;
}>();

const releaseDateFormatted = computed(() => {
  const formatter = new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "numeric" });
  return formatter.format(new Date(`${props.item?.release_date || props.item?.first_air_date}T00:00:00`));
});

const voteAverageFormatter = computed(() => {
  return Math.round(props.item?.vote_average || 0);
});
</script>

<style lang="scss" scoped>
.flexContainer {
  display: flex;
  gap: 32px;
}

.flexContainer--small {
  display: flex;
  gap: 16px;
}

.modalPrimary {
  width: 80%;
  background-color: #0b0b0b;
  padding: 48px;
  border-radius: $border-radius;

  &__info {
    flex-direction: column;

    h1,
    span {
      color: $white;
    }

    h1 {
      font-size: 48px;
      font-weight: 500;
    }

    span {
      line-height: 140%;
    }

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

  .modalPrimary__images {
    min-width: 50%;
    position: relative;

    &--big {
      position: absolute;
      left: 0;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
    }
  }
}
</style>
