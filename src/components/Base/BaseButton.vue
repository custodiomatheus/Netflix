<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
button {
  width: 100%;
  background-color: $red;
  padding: 16px;
  border-radius: $border-radius;
  border: none;
  color: $white;
  font-size: 1rem;
}
</style>
