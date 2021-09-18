<template>
  <li :class="$route.path === '/home' ? 'card-home' : 'card-search'">
    <span class="material-icons card-icon" @click="addFavorite"
      >add_circle_outline</span
    >
    <img class="card-image" :src="imageUrl" :alt="serie.original_title" />
  </li>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapGetters } from "vuex";

import api from "../service/api";

@Options({
  props: {
    type: {
      type: String,
      require: true,
    },
    serie: {
      type: Object,
      require: true,
    },
  },
  computed: {
    ...mapGetters("user", ["getUserId"]),
  },
})
export default class ShowCard extends Vue {
  type!: string;
  serie!: any;
  getUserId!: number;

  get imageUrl(): string {
    return this.serie?.backdrop_path
      ? `https://image.tmdb.org/t/p/w500/${this.serie.backdrop_path}`
      : "https://occ-0-759-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41";
  }

  addFavorite(): void {
    console.log(this.serie);
    
    api
      .put(`/users-shows`, {
        user: {
          id: this.getUserId,
        },
        show: {
          id: this.serie.id,
          type: this.type || this.serie.media_type,
        },
        is_favorite: true,
        is_watched: false,
      })
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addWatched(): void {
    api
      .put(`/users-shows`, {
        user: {
          id: this.getUserId,
        },
        show: {
          id: this.serie.id,
        },
        is_favorite: false,
        is_watched: true,
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.card-home,
.card-search {
  position: relative;
}

.card-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 26px;
  z-index: 1;
  display: none;
}

.card-home {
  width: 350px;
  height: 195px;
  cursor: pointer;
  transform: scale(0.96);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
  }

  &:hover img {
    filter: brightness(30%);
  }

  &:hover .card-icon {
    display: flex;
  }

  img {
    width: 100%;
  }
}

.card-search {
  width: 300px;
  height: 170px;
  background-color: var(--gray);
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
  }

  &:hover img {
    filter: brightness(30%);
  }

  &:hover .card-icon {
    display: flex;
  }

  img {
    height: 100%;
  }
}
</style>