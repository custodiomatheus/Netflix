<template>
  <HeaderApp />

  <main style="padding-bottom: 32px">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderApp from "@/components/Header/HeaderApp.vue";
</script>

<style lang="scss">
.app {
  width: 100%;
  background-color: $black;
  min-height: 100vh;

  &__padding {
    padding: 0 $padding-horizontal-desktop;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
}
</style>
