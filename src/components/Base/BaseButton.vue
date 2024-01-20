<template>
  <button>
    <div :class="{ loading: loading }" />
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: false,
});
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .loading {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid $white;
    animation: spin 1s linear infinite;
    margin: 0 7px 0 -20px;
  }
}
</style>
