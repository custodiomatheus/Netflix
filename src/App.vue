<template>
  <RouterView />

  <FooterPrimary />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterPrimary from "@/components/Footer/FooterPrimary";
</script>

<style lang="scss">
.container {
  width: 100%;
}
</style>
