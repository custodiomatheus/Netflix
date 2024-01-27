<template>
  <header>
    <img :src="`${TMDB_URL}w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="Logo" height="50" />
  </header>
</template>

<script setup lang="ts">
import { TMDB_URL } from "@/helpers/constants/urls";
</script>

<style lang="scss" scoped>
header {
  height: $header-height-size-1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $padding-vertical-desktop;
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
