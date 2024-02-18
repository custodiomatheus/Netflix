<template>
  <div>
    <img :src="poster_path" :alt="overview" loading="lazy" />
    <h4>{{ title }}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  overview: string;
  poster_path: string;
}>();
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 450px;
  border-radius: $border-radius;
  margin-bottom: 16px;
}

h4 {
  color: $white;
}
</style>
