<template>
  <BaseModal @closeModal="emits('closeModal')">
    <div class="modalPrimary flexContainer">
      <div class="modalPrimary__info flexContainer--small">
        <h1>{{ item.title }}</h1>

        <div class="flexContainer--small">
          <span class="releaseDate">{{ releaseDateFormatted }}</span>
          <span :class="['average', `average${voteAverageFormatter > 5 ? '--positive' : '--negative'}`]">
            {{ voteAverageFormatter }} pontos
          </span>
        </div>

        <span>{{ item.overview }}</span>
      </div>

      <img :src="`${TMDB_IMAGE_URL}w1280/${item.backdrop_path}`" />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseModal from "@/components/Base/BaseModal.vue";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

const emits = defineEmits(["closeModal"]);

interface ItemProp {
  title: string;
  backdrop_path: string;
  overview: string;
  release_date?: number;
  vote_average: number;
  first_air_date?: number;
}

const props = defineProps<{
  item: ItemProp;
}>();

const releaseDateFormatted = computed(() => {
  const formatter = new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "numeric" });
  return formatter.format(new Date(`${props.item?.release_date || props.item?.first_air_date}T00:00:00`));
});

const voteAverageFormatter = computed(() => {
  return Math.round(props.item.vote_average);
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

  img {
    border-radius: $border-radius;
    width: 50%;
  }
}
</style>
