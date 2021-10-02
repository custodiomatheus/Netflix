<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: var(--black);
  color: var(--white);
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

input {
  outline: none;
  border: none;
}

:root {
  --black: #141414;
  --white: #fff;
  --red: #b9090b;
  --gray: #a7a7a7;
  --gray-secondary: #333;
  --green: #46d369;
  --orange: #e87c03
}

.fab {
  font-size: 30px;
  cursor: pointer;
}

.material-icons {
  cursor: pointer;
}

.field-error {
  border: 1px solid var(--orange);
}
</style>
