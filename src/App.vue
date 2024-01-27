<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss">
.container {
  height: 100vh;
  width: 100%;
  padding-top: $header-height-size;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
}
// ul {
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }

// input {
//   outline: none;
//   border: none;
// }

// .fab {
//   font-size: 30px;
//   cursor: pointer;
// }

// .material-icons {
//   cursor: pointer;
// }

// .field-error {
//   border: 1px solid var(--orange);
// }
</style>
