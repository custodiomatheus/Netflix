<template>
  <div>
    <Header />

    <section class="image-layer">
      <div class="image-layer__darkness"></div>
      <div class="image-layer__description">
        <p class="image-layer__text">
          Depois de três anos em coma, Vanessa desperta em um mundo devastado
          pelos vampiros. Agora, ela e um bando de sobreviventes precisam lutar
          para permanecerem vivos.
        </p>

        <div class="image-layer__buttons">
          <button class="image-layer__button watch">
            <span class="material-icons"> play_arrow </span>
            Assistir
          </button>

          <button class="image-layer__button info">
            <i class="material-icons">info_outline</i>
            Mais informações
          </button>
        </div>
      </div>
    </section>

    <section class="content">
      <Row />
    </section>
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Row from "../components/Row.vue";

export default {
  components: {
    Header,
    Row
  },
};
</script>

<style lang="scss" scoped>
.image-layer {
  width: 100%;
  height: 90vh;
  position: relative;
  background: url("../assets/supernatural.png");
  background-size: cover;

  .image-layer__darkness {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .image-layer__description {
    width: 35%;
    height: 35%;
    position: absolute;
    bottom: 140px;
    left: 62px;

    .image-layer__text {
      font-size: 20px;
      color: var(--white);
      margin-bottom: 25px;
    }

    .image-layer__buttons {
      display: flex;
      column-gap: 15px;
    }

    .image-layer__button {
      border: none;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 8px;

      &:hover {
        cursor: pointer;
      }
    }

    .info {
      width: 250px;
      height: 45px;
      background-color: rgba(109, 109, 109, 0.7);
      color: var(--white);

      &:hover {
        background-color: rgba(109, 109, 109, 0.4);
      }
    }

    .watch {
      width: 150px;
      height: 45px;
      background-color: var(--white);
      color: var(--black);
    }
  }
}

.content {
  width: 100%;
  padding-left: 62px;
  position: relative;
  top: -75px;
  background-color: red;
}
</style>
