<template>
  <header :class="{ 'background-solid': scrollPosition }">
    <router-link to="/">
      <img :src="`${TMDB_IMAGE_URL}w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="Logo" height="32" />
    </router-link>

    <ul>
      <li v-for="item in HEADER_APP_LIST" :key="item.route">
        <router-link :to="item.route">{{ item.title }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";
import { HEADER_APP_LIST } from "@/helpers/constants/header";

const scrollPosition = ref<boolean>(false);

const handleScrollPosition = (): void => {
  scrollPosition.value = window.scrollY > 40;
};

window.addEventListener("scroll", handleScrollPosition);
</script>

<style lang="scss" scoped>
.background-solid {
  transition: background-color 0.5s;
  background-color: $black;
}

header {
  height: $header-height-size-2;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 0 $padding-horizontal-desktop;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;
  background: linear-gradient($black 1%, transparent 100%);

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 32px;

    li a {
      text-decoration: none;
      color: $white;
      font-size: 14px;
      transition: color 0.4s;

      &.router-link-exact-active &:hover {
        color: $gray-600;
      }

      &.router-link-exact-active {
        font-weight: 600;
      }
    }
  }
}
</style>
