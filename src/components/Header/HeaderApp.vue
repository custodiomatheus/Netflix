<template>
  <header>
    <img src="https://image.tmdb.org/t/p/w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Logo" height="32" />
  </header>
</template>

<style lang="scss" scoped>
.background-solid {
  transition: background-color 0.5s;
  background-color: rgb(20, 20, 20);
}

header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 62px;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;
  background: linear-gradient(rgb(20, 20, 20) 1%, transparent 100%);
}
</style>
