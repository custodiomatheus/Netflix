<template>
  <div class="my-list">
    <h2 class="my-list--title">Minha Lista</h2>

    <ul class="my-list--list">
      <li class="my-list--item" v-for="show in shows" :key="show">
        <span class="material-icons my-list--icon" @click="removeFavorite(show)"
          >check_circle</span
        >
        <img
          class="my-list--image"
          :src="`https://image.tmdb.org/t/p/original/${show.backdrop_path}`"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import axios from "axios";

import api from "../service/api";

interface Favorite {
  user: {
    id: number;
    nickname: string;
  };
  show: {
    id: number;
    type: string;
  };
  is_favorite: boolean;
  is_watched: boolean;
}

@Options({
  data() {
    return {
      favorites: [] as number[],
      shows: [],
    };
  },
  computed: {
    ...mapGetters("user", ["getUserId"]),
  },
})
export default class MyList extends Vue {
  favorites!: Favorite[];
  shows!: any[];
  getUserId!: number;

  async mounted(): Promise<void> {
    await this.findUsersFavorites();
    this.findShowData();
  }

  findShowData() {
    this.favorites.map(async (favorite) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${favorite.show.type}/${favorite.show.id}?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        );
        this.shows.push(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  }

  async findUsersFavorites() {
    try {
      const response = await api.get(
        `/users-shows/user/favorite/${this.getUserId}`
      );
      this.favorites = [...response.data];
    } catch (error) {
      console.log(error);
    }
  }

  removeFavorite(show: any) {
    let favoriteIndex = -1;

    const favoriteToRemove = this.favorites.find(
      (favorite: Favorite, index) => {
        if (favorite.show.id === show.id) {
          favoriteIndex = index;
          return favorite;
        }
      }
    );

    api
      .put(`/users-shows`, {
        user: favoriteToRemove?.user,
        show: favoriteToRemove?.show,
        is_favorite: false,
        is_watched: favoriteToRemove?.is_watched,
      })
      .then(() => {
        this.favorites.splice(favoriteIndex, 1);
        this.shows.splice(favoriteIndex, 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.my-list {
  width: 100%;
  margin-top: 13vh;
  padding: 0.3vh 62px 0;

  &--title {
    font-size: 26px;
    font-weight: normal;
  }

  &--list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 8vh 3px;
    margin-top: 8vh;
  }

  &--item {
    cursor: pointer;
    position: relative;

    &:hover .my-list--icon {
      display: flex;
    }

    &:hover img {
      filter: brightness(30%);
    }
  }

  &--icon {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 22px;
    z-index: 1;
    display: none;
  }

  &--image {
    width: 250px;
    transition: all ease 0.2s;
  }
}
</style>
