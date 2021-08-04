<template>
  <router-view />
</template>

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

:root {
  --black: #141414;
  --white: #fff;
  --red: #e50914;
  --gray: #a7a7a7;
  --gray-secondary: #333;
  --green: #46d369;
}
</style>
