<template>
  MY LIST
  <!-- <div class="my-list">
    <h2 class="my-list--title">Minha Lista</h2>

    <ul class="my-list--list">
      <li class="my-list--item" v-for="(show, index) in shows" :key="show">
        <span
          class="material-icons my-list--icon"
          @click="removeFavorite(show, index)"
          >check_circle</span
        >
        <img
          class="my-list--image"
          :src="`https://image.tmdb.org/t/p/original/${show.backdrop_path}`"
          alt=""
        />
      </li>
    </ul>
  </div> -->
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
// import { mapGetters } from "vuex";
// import axios from "axios";

// import api from "../service/api";

// interface Favorite {
//   user: {
//     id: number;
//   };
//   show: {
//     id: number;
//     type: string;
//   };
// }

// @Options({
//   data() {
//     return {
//       favorites: [] as number[],
//       shows: [],
//     };
//   },
//   computed: {
//     ...mapGetters("user", ["getUserId"]),
//   },
// })
// export default class MyList extends Vue {
//   favorites!: Favorite[];
//   shows!: any[];
//   getUserId!: number;

//   async mounted(): Promise<void> {
//     await this.findUsersFavorites();
//     this.findShowData();
//   }

//   findShowData(): void {
//     // TODO -> USAR O PROMISE.ALL
//     this.favorites.map(async (favorite) => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/${favorite.show.type}/${favorite.show.id}?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
//         );
//         this.shows.push(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   }

//   async findUsersFavorites(): Promise<void> {
//     try {
//       const response = await api.get(`/users/favorites/${this.getUserId}`);

//       if (response.data) {
//         this.favorites = [...response.data.favorites];
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   removeFavorite(show: any, showIndex: number): void {
//     let favoriteIndex = -1;

//     const favoriteToRemove = this.favorites.find(
//       (favorite: Favorite, index) => {
//         if (favorite.show.id === show.id) {
//           favoriteIndex = index;
//           return favorite;
//         }
//       }
//     );

//     api
//       .delete(`/favorites`, {
//         data: {
//           user: favoriteToRemove?.user,
//           show: favoriteToRemove?.show,
//         },
//       })
//       .then(() => {
//         this.favorites.splice(favoriteIndex, 1);
//         this.shows.splice(showIndex, 1);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }
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
