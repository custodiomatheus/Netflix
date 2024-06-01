<template>
  <div class="cardPrimary">
    <div class="cardPrimary__image">
      <img :src="poster_path_small" :alt="overview" loading="lazy" />
      <img :src="poster_path_big" :alt="overview" loading="lazy" class="cardPrimary__image--big" />
    </div>

    <div class="cardPrimary__overlay">
      <p>{{ overviewSliced }}</p>

      <BaseButton text="Leia Mais" @click="handleClick" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const emits = defineEmits(["buttonClick"]);

const props = defineProps<{
  title: string | undefined;
  overview: string;
  poster_path_big: string;
  poster_path_small: string;
}>();

const overviewSliced = computed(() => {
  if (props.overview.length > 150) {
    return `${props.overview.slice(0, 150)}...`;
  }
  return props.overview;
});

const handleClick = () => {
  emits("buttonClick");
};
</script>

<style lang="scss" scoped>
.cardPrimary {
  position: relative;

  .cardPrimary__image {
    position: relative;

    img {
      width: 100%;
      height: 380px;
      border-radius: $border-radius;
    }

    &--big {
      position: absolute;
      left: 0;
    }
  }

  &__overlay {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    padding: 16px 16px 32px;
    background-image: linear-gradient(180deg, rgba($black, 0.5), rgba($black, 0.8), rgba($black, 1) 45%);
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;
    transition: all ease-in-out 0.3s;

    p {
      color: $white;
      line-height: 130%;
    }
  }

  &:hover {
    .cardPrimary__overlay {
      height: 100%;
      opacity: 1;
    }
  }
}
</style>
