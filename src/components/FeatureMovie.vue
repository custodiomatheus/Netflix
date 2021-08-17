<template>
  <section
    class="feature"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
    }"
  >
    <div class="feature--transparence">
      <h1 class="feature--name">{{ serie.original_name }}</h1>
      <div class="feature--info">
        <span class="feature--points">{{ serie.vote_average }} pontos</span>
        <span class="feature--year">{{
          releaseYear(serie.first_air_date) || ""
        }}</span>
        <span class="feature--seasons">
          {{ serie.number_of_seasons }} 
          temporada{{ serie.number_of_seasons > 1 ? "s" : "" }}
        </span>
      </div>

      <p v-if="serie.overview" class="feature--description">
        {{ shortedOverview }}
        ...
      </p>

      <div class="feature--buttons">
        <button class="feature--watch">
          <i class="material-icons"> play_arrow </i>
          Assistir
        </button>
        <button class="feature--more-info">
          <i class="material-icons">info_outline</i> Mais informações
        </button>
      </div>

      <div class="feature--genres">
        <strong>Gêneros: </strong>
        <span v-for="(genre, index) in serie.genres" :key="genre.id">
          {{ genre.name }} {{ index == serie.genres?.length - 1 ? "" : ", " }}
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import api from "axios";

@Options({
  data() {
    return {
      serie: Object,
    };
  },
  props: {
    serieId: {
      type: Number,
      require: true,
    },
  },
})
export default class FeatureMovie extends Vue {
  serieId!: number;
  serie!: any;

  mounted(): void {
    api
      .get(
        `https://api.themoviedb.org/3/tv/${this.serieId}?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
      )
      .then((response) => {
        this.serie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get shortedOverview(): string {
    return this.serie.overview?.slice(0, 250) || "";
  }

  releaseYear(date: string): number {
    return new Date(date).getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.feature {
  height: 100vh;
  background-size: cover;
  background-position: center;

  &--transparence {
    height: inherit;
    background: linear-gradient(to top, var(--black) 10%, transparent 90%),
      linear-gradient(to right, var(--black) 20%, transparent 80%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
  }

  &--name {
    font-size: 60px;
    font-weight: bold;
    margin: 0;
  }

  &--info {
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
  }

  &--points,
  &--year {
    margin-right: 15px;
  }

  &--points {
    color: var(--green);
  }

  &--description {
    max-width: 40%;
    max-height: 20%;
    color: var(--gray);
    font-size: 20px;
    margin-top: 15px;
  }

  &--buttons {
    margin-top: 15px;
    display: flex;
  }

  &--watch,
  &--more-info {
    font-size: 18px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
    opacity: 1;
    transition: opacity ease 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &--watch {
    margin-right: 10px;
    background-color: var(--white);
    color: var(--black);
  }

  &--more-info {
    background-color: var(--gray-secondary);
    color: var(--white);
  }

  &--genres {
    margin-top: 15px;
    font-size: 18px;
    color: var(--gray);
    
    span {

    }
  }
}

.description--overflow {
  text-overflow: ellipsis;
}
</style>
