<template>
  <BaseHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseHeader from "@/components/Base/BaseHeader.vue";
</script>

<style lang="scss">
.container {
  background-image: url("@/assets/images/background-login.png");

  &__form {
    width: 500px;
    padding: 60px 68px 40px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;

    > span {
      color: $gray-700;

      > a {
        color: $white;
      }
    }
  }
}
</style>
