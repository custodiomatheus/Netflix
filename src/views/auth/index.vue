<template>
  <BaseHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseHeader from "@/components/BaseHeader.vue";
</script>
