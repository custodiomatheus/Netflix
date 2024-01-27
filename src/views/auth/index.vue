<template>
  <HeaderAuth />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderAuth from "@/components/Header/HeaderAuth.vue";
</script>

<style lang="scss">
.container {
  &__authentication {
    background-image: url("@/assets/images/background-login.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;

    &-form {
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
}
</style>
