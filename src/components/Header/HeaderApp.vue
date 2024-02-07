<template>
  <header :class="{ 'background-solid': scrollPosition > 40 }">
    <img :src="`${TMDB_IMAGE_URL}w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="Logo" height="32" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";

const scrollPosition = ref();

const handleScrollPosition = () => {
  scrollPosition.value = window.scrollY;
};

window.addEventListener("scroll", handleScrollPosition);
</script>

<style lang="scss" scoped>
.background-solid {
  transition: background-color 0.5s;
  background-color: $black;
}

header {
  height: $header-height-size-2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $padding-horizontal-desktop;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;
  background: linear-gradient($black 1%, transparent 100%);
}
</style>
