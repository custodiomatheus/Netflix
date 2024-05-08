<template>
  <footer class="container footer">
    <div class="footer--text">
      <span>Vuetflix©2024</span>
      <span>
        Dados fornecidos pelo
        <strong>
          <a href="https://www.themoviedb.org/" target="_blank">Themoviedb.org</a>
        </strong>
      </span>
    </div>

    <div class="footer--icons">
      <a href="https://www.linkedin.com/in/matheuscustodio/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/custodiomatheus" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: $black;
  padding: 96px $padding-horizontal-desktop;
  border-top: 1px solid $gray-900;

  a:visited {
    color: inherit;
  }

  &--text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: $gray-700;
    font-size: 14px;
  }

  &--icons {
    display: flex;
    gap: 24px;

    i {
      font-size: 24px;
      color: $white;
    }
  }
}
</style>
