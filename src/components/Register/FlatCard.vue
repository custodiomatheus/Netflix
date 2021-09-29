<template>
  <div class="card">
    <h2 class="card--title">Plano {{ flat.name }}</h2>
    <h3 class="card--subtitle">
      {{ flat.amountScreen }} Tela - R$ {{ flat.price.replace(".", ",") }}
    </h3>

    <div class="card--options">
      <div>
        <input type="checkbox" disabled />
        <label class="card--label" for="">Imagem em HD disponível</label>
      </div>
      <div>
        <input type="checkbox" disabled />
        <label class="card--label" for="">Imagem em Ultra HD</label>
      </div>
      <div>
        <input type="checkbox" checked disabled />
        <label class="card--label" for=""> Filmes e séries ilimitados</label>
      </div>
      <div>
        <input type="checkbox" checked disabled />
        <label class="card--label" for="">Assista de onde quiser</label>
      </div>
      <div>
        <input type="checkbox" checked disabled />
        <label class="card--label" for="">Mês gratuito de teste </label>
      </div>
    </div>

    <button class="card--button">Selecionar</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

interface Flat {
  id: number;
  name: string;
  price: number;
}

@Options({
  props: {
    flat: {
      type: Object,
      require: true,
    },
  },
})
export default class FlatCard extends Vue {
  flat!: Flat;
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: 5px;
  background-color: #404040;
  display: flex;
  flex-direction: column;
  align-items: center;

  &--select {
    background-color: #252525;
  }

  &--title {
    font-size: 18px;
    margin: 0;
  }

  &--subtitle {
    font-size: 16px;
    margin: 5px 0 10px;
  }

  &--options {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    & > div {
      margin: 2px 0;
    }
  }

  &--label {
    font-size: 15px;
  }

  &--button {
    padding: 8px 28px;
    background-color: var(--red);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    color: var(--white);
    font-size: 12px;
  }
}
</style>
