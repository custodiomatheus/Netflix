<template>
  <footer class="footer">
    <div class="footer--content">
      <p>Feito por Matheus Custódio</p>
      <p>Direitos de imagem para Netflix</p>
      <p>Dados pegos do site Themoviedb.org</p>
    </div>

    <div class="footer--icons">
      <a href="https://www.linkedin.com/in/matheuscustodio/"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/custodiomatheus"><i class="fab fa-github"></i></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Foooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  color: var(--gray);

  &--content {
    text-align: center;
  }

  &--icons {
    position: absolute;
    right: 2vw;
  
    a:visited {
      color: inherit;
    }

    .fa-linkedin {
      margin-right: 15px;
    }
  }

}
</style>