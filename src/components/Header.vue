<template>
  <header
    :class="[
      topDistance
        ? 'background-solid'
        : $route.path === '/home'
        ? 'background-gradient'
        : 'none',
    ]"
  >
    <div style="display: flex; align-items: center">
      <img
        src="https://image.tmdb.org/t/p/w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        :height="$route.path === '/login' ? 50 : 32"
        alt=""
      />

      <nav
        class="primary-nav"
        v-if="['/search', '/home'].includes($route.path)"
      >
        <ul class="primary-nav-list">
          <li
            :class="getShowType === 'home' ? 'active' : ''"
            @click="handlePage('home')"
          >
            Início
          </li>
          <li
            :class="getShowType === 'series' ? 'active' : ''"
            @click="handlePage('series')"
          >
            Séries
          </li>
          <li
            :class="getShowType === 'movies' ? 'active' : ''"
            @click="handlePage('movies')"
          >
            Filmes
          </li>
          <li>Minha Lista</li>
        </ul>
      </nav>
    </div>

    <nav
      class="secondary-nav"
      v-if="['/search', '/home'].includes($route.path)"
    >
      <input
        type="search"
        class="input-search"
        id="input-search"
        v-model="searchShow"
      />
      <i class="material-icons search-icon" @click="search">search</i>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  data() {
    return {
      topDistance: 0,
      searchShow: "",
    };
  },
  computed: {
    ...mapGetters("show", ["getShowType"]),
  },
  methods: {
    ...mapActions("show", ["ActionSetShowType"]),
  },
  watch: {
    searchShow() {
      if (this.searchShow) {
        this.$router.push({ path: "/search", query: { q: this.searchShow } });
      } else {
        this.$router.push("/home");
        document
          .getElementById("input-search")
          ?.classList.remove("input-search-focus");
      }
    },
  },
})
export default class Header extends Vue {
  topDistance = 0;
  getShowType!: string;
  searchShow!: string;
  ActionSetShowType!: (page: string) => void;

  created(): void {
    window.addEventListener("scroll", this.handleScroll);
  }

  mounted(): void {
    this.validateSeachShow();
  }

  validateSeachShow(): void {
    if (this.$route.path === "/search" && !this.searchShow) {
      this.$router.push("/home");
      document.getElementById("input-search")?.blur();
    }
  }

  handleScroll(): void {
    this.topDistance = window.pageYOffset;
  }

  handlePage(page: string): void {
    this.ActionSetShowType(page);
    this.$emit("handlePage");
  }

  search(): void {
    document
      .getElementById("input-search")
      ?.classList.add("input-search-focus");
  }
}
</script>

<style lang="scss" scoped>
.background-gradient {
  background: linear-gradient(rgb(20, 20, 20) 1%, transparent 99%);
}
.background-solid {
  transition: background-color 0.5s;
  background-color: rgb(20, 20, 20);
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5vh 62px;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;
  // background-color: green;

  h1 {
    font-size: 32px;
    color: var(--red);
  }

  nav.primary-nav {
    margin-left: 40px;

    ul {
      list-style: none;
      display: flex;

      li {
        color: var(--white);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        padding-right: 25px;
        cursor: pointer;
        transition: color 1s ease;

        &.active {
          font-weight: 700;
          cursor: default;

          &:hover {
            color: var(--white);
          }
        }

        &:hover {
          color: var(--gray);
        }
      }
    }
  }

  nav.secondary-nav {
    height: 35px;
    display: flex;
    align-items: center;
    position: relative;

    .search-icon {
      position: absolute;
      left: 10px;
      font-size: 28px;
    }

    .input-search {
      width: 0;
      height: inherit;
      color: var(--white);
      padding-left: 45px;
      background-color: transparent;
      border: 0 solid var(--white);
      transition: all 0.2s ease;
    }

    // .input-search:focus {
    //   width: 260px;
    //   border-width: 1px;
    //   background-color: var(--black);
    // }

    .input-search-focus {
      width: 260px;
      border-width: 1px;
      background-color: var(--black);
    }
  }
}
</style>
