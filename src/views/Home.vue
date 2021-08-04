<template>
  <div>
    <Header />

    <section v-if="featureId">
      <FeatureMovie :serieId="featureId.id" />
    </section>

    <section class="lists">
      <ul>
        <li v-for="serie in homeSeries" :key="serie">
          <Row :title="serie.title" :series="serie.items" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "../components/Header.vue";
import FeatureMovie from "../components/FeatureMovie.vue";
import Row from "../components/Row.vue";
import seriesList from "../service/Tmdb";
import SeriesType from "../types/SeriesType";

@Options({
  data() {
    return {
      homeSeries: [],
      featureId: 0,
    };
  },

  components: {
    Header,
    FeatureMovie,
    Row,
  },
})
export default class Home extends Vue {
  homeSeries!: SeriesType[];
  featureId!: 0;

  async mounted() {
    await this.findSeries();
    this.sortFeatureSerie();
  }

  async findSeries(): Promise<void> {
    this.homeSeries = await seriesList.getHomeList();
  }

  sortFeatureSerie(): void {
    this.featureId =
      this.homeSeries[1].items[
        Math.round(Math.random() * this.homeSeries[1].items.length)
      ];
  }
}
</script>

<style lang="scss" scoped>
.lists {
  margin-top: -75px;
}
</style>
