<template>
  <HeaderApp />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderApp from "@/components/Header/HeaderApp.vue";
</script>
