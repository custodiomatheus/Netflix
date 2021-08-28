<template>
  <li :class="$route.path === '/home' ? 'card-home' : 'card-search'">
    <img :src="imageUrl" :alt=serie.original_title />
  </li>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    serie: {
      type: Object,
      require: true,
    },
  },
})
export default class ShowCard extends Vue {
  serie!: any;

  get imageUrl(): string {
    if (this.serie?.poster_path || this.serie?.backdrop_path) {
      return `https://image.tmdb.org/t/p/w300${
        this.$route.path === "/home"
          ? this.serie.poster_path
          : this.serie.backdrop_path
      }`;
    } else {
      return "https://occ-0-759-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41";
    }
  }
}
</script>

<style lang="scss" scoped>
.card-home {
  width: 150px;
  height: 225px;
  background-color: var(--gray);
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
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

  img {
    height: 100%;
  }
}
</style>