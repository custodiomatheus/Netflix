<template>
  <header :class="{ 'background-solid': scrollPosition }">
    <nav>
      <router-link to="/">
        <img :src="`${TMDB_IMAGE_URL}w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="Logo" height="32" />
      </router-link>

      <ul>
        <li v-for="item in HEADER_APP_LIST" :key="item.route">
          <router-link :to="item.route">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>

    <div :class="['searchField', { searchField__active: searchFieldActive }]">
      <i @click="handleSearch(!searchFieldActive)" class="fa-solid fa-magnifying-glass"></i>
      <input
        ref="searchField"
        type="text"
        v-model="searchFieldValue"
        @blur="handleSearchFieldBlur"
        @input="handleSearchFieldValue(searchFieldValue)"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";
import { LocationQueryValue } from "vue-router";
import useNavigate from "@/composables/useNavigate";
import { TMDB_IMAGE_URL } from "@/helpers/constants/urls";
import { HEADER_APP_LIST } from "@/helpers/constants/header";

const { handlePageNavigation, getQueryParam } = useNavigate();

const scrollPosition = ref<boolean>(false);

const searchField = ref();

const valueSearch = computed<LocationQueryValue | LocationQueryValue[]>(() => getQueryParam("s"));
const searchFieldValue = ref<LocationQueryValue | LocationQueryValue[] | string>(valueSearch.value ?? "");

const searchFieldActive = ref<boolean>(!!searchFieldValue.value || false);

const handleScrollPosition = (): void => {
  scrollPosition.value = window.scrollY > 40;
};

const handleSearch = (status: boolean) => {
  searchFieldActive.value = status;

  nextTick(() => {
    searchField.value.focus();
  });
};

const handleSearchFieldBlur = () => {
  if (!searchFieldValue.value) {
    handleSearch(false);
  }
};

const handleSearchFieldValue = (value: string) => {
  handlePageNavigation({ name: "Search", queryParams: { s: value } });
};

watch(
  () => valueSearch.value,
  () => {
    if (!valueSearch.value) {
      searchFieldValue.value = "";
      handleSearch(false);
    }
  }
);

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
  justify-content: space-between;
  padding: 0 $padding-horizontal-desktop;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;
  background: linear-gradient($black 1%, transparent 100%);

  nav {
    display: flex;
    align-items: center;
    gap: 64px;

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

  .searchField {
    position: relative;
    display: flex;
    align-items: center;

    i {
      font-size: 16px;
      color: $white;
      cursor: pointer;
    }

    input {
      width: 0;
      border: 1px solid $white;
      background-color: $black;
      color: $white;
      font-size: 14px;
      padding: 6px 16px 6px 32px;
      display: none;
    }

    &__active {
      i {
        left: 8px;
        position: absolute;
      }

      input {
        width: 212px;
        display: block;
      }
    }
  }
}
</style>
