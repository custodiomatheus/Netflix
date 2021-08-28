<template>
  <div class="show">
    <h2 class="show--title">{{ title }}</h2>
    <div class="show--listarea">
      <span
        v-if="marginScroll"
        class="material-icons show--scroll-left"
        @click="scrollLeft"
        >arrow_back_ios_new
      </span>
      <span @click="scrollRight" class="material-icons show--scroll-right"
        >arrow_forward_ios</span
      >
      <ul
        class="show--list"
        :style="{
          width: `${series.length * 150}px`,
          marginLeft: `${marginScroll}px`,
        }"
      >
        <ShowCard v-for="serie in series" :key="serie.id" :serie="serie" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

import ShowCard from "./ShowCard.vue";

@Options({
  props: {
    title: {
      type: String,
      require: true,
    },
    series: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
      marginScroll: 0 as number,
    };
  },

  components: {
    ShowCard,
  },
})
export default class Row extends Vue {
  title!: string;
  series!: [];
  marginScroll!: number;

  scrollLeft(): void {
    let amountSroll = this.marginScroll + Math.round(window.innerWidth / 2);

    if (amountSroll > 0) {
      amountSroll = 0;
    }

    this.marginScroll = amountSroll;
  }

  scrollRight(): void {
    let amountSroll = this.marginScroll - Math.round(window.innerWidth / 2);
    const listSeriesSize = this.series.length * 150;

    if (window.innerWidth - listSeriesSize > amountSroll) {
      amountSroll = window.innerWidth - listSeriesSize - 60;
    }

    this.marginScroll = amountSroll;
  }
}
</script>

<style lang="scss" scoped>
.show {
  margin-bottom: 30px;

  &--title {
    margin: 0 0 0 50px;
  }

  &--scroll-left,
  &--scroll-right {
    width: 40px;
    height: 225px;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;
    overflow: hidden;
  }

  &--scroll-left:hover,
  &--scroll-right:hover {
    font-size: 50px;
  }

  &--scroll-left {
    left: 0;
  }

  &--scroll-right {
    right: 0;
  }

  &--listarea {
    overflow: hidden;
    padding-left: 50px;
  }

  &--listarea:hover &--scroll-left,
  &--listarea:hover &--scroll-right {
    opacity: 1;
  }

  &--list {
    display: flex;
    transition: all ease 0.5s;
  }
}
</style>