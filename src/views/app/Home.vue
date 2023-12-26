<template>
  HOME
  <!-- <div v-if="featureShow.id">
    <section>
      <FeatureMovie :showId="featureShow.id" />
    </section>

    <section class="lists">
      <ul>
        <li v-for="serie in homeShows" :key="serie">
          <Row :title="serie.title" :series="serie" />
        </li>
      </ul>
    </section>

    <Footer />
  </div> -->
</template>

<script setup lang="ts">
// import { Options, Vue } from "vue-class-component";
// import { mapGetters, mapActions } from "vuex";

// import Header from "../components/Header.vue";
// import FeatureMovie from "../components/FeatureMovie.vue";
// import Row from "../components/Row.vue";
// import Footer from "../components/Footer.vue";

// import ShowType from "../types/ShowType";

// import seriesList from "../service/Tmdb";

// @Options({
//   data() {
//     return {
//       homeShows: [] as ShowType[],
//       featureShow: 0 as number,
//       sortedIndex: 0 as number,
//     };
//   },
//   computed: {
//     ...mapGetters("show", ["getShowType"]),
//   },
//   methods: {
//     ...mapActions("show", ["ActionSetShowType", "ActionSetShowId"]),
//   },
//   watch: {
//     getShowType() {
//       this.featureShow = { id: 0 };
//       this.handlePage();
//     },
//   },
//   components: {
//     Header,
//     FeatureMovie,
//     Row,
//     Footer,
//   },
// })

// export default class Home extends Vue {
//   homeShows!: ShowType[];
//   featureShow!: { id: 0 };
//   getShowType!: string;
//   sortedIndex!: number;
//   ActionSetShowType!: (page: string) => void;
//   ActionSetShowId!: (page: number) => void;

//   async mounted(): Promise<void> {
//     this.ActionSetShowType("home");
//     await this.handlePage();
//   }

//   async findShows(): Promise<void> {
//     if (this.getShowType === "home") {
//       this.homeShows = await seriesList.getHomeList();
//     } else if (this.getShowType === "movies") {
//       this.homeShows = await seriesList.getMoviesList();
//     } else if (this.getShowType === "series") {
//       this.homeShows = await seriesList.getSeriesList();
//     }
//   }

//   sortFeatureShow(): void {
//     const sortedIndexCopy = this.sortedIndex;

//     this.sortedIndex = this.sortIndex(this.homeShows[1].items.length);

//     if (sortedIndexCopy === this.sortedIndex || !this.featureShow.id) {
//       this.sortedIndex = this.sortIndex(this.homeShows[1].items.length);
//     }

//     this.featureShow = this.homeShows[1].items[this.sortedIndex];

//     this.ActionSetShowId(this.featureShow.id);
//   }

//   sortIndex(maxNumber: number): number {
//     return Math.round(Math.random() * maxNumber);
//   }

//   async handlePage(): Promise<void> {
//     await this.findShows();
//     this.sortFeatureShow();
//   }
// }
</script>

<style lang="scss" scoped>
.lists {
  margin-top: -75px;
}
</style>
