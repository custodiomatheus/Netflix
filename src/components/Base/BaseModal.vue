<template>
  <div class="modal">
    <div class="modal__overlay" @click="emits('closeModal')"></div>

    <slot />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: rgba($black, 0.8);
  }
}
</style>
