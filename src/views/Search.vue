<template>
  <div>
    <div class="search">
      <ul class="search--content">
        <ShowCard v-for="show in shows" :key="show.id" :serie="show" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

import Header from "../components/Header.vue";
import ShowCard from "../components/ShowCard.vue";

@Options({
  data() {
    return {
      shows: [],
    };
  },
  watch: {
    "$route.query.q"() {
      this.findShows();
    },
  },
  components: {
    Header,
    ShowCard,
  },
})
export default class Search extends Vue {
  shows!: [];
  searchValue!: string;

  mounted() {
    this.findShows();
  }

  findShows() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR&query=${this.$route.query.q}&page=1&include_adult=false`
      )
      .then((response) => {
        this.shows = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  margin-top: 13vh;
  padding: 10vh 62px 0;
  // background-color: red;

  &--content {
    width: 100%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    // background-color: blue;
  }
}
</style>