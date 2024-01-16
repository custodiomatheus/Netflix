<template>
  <!-- 
    v-if="$route.path !== '/register'"
    :class="[topDistance ? 'background-solid' : $route.path === '/home' ? 'background-gradient' : 'none']" 
  -->
  <header>
    <div>
      <img
        src="https://image.tmdb.org/t/p/w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Logo"
        :height="!isAuthenticated ? 50 : 32"
      />

      <nav v-if="isAuthenticated" class="primary-nav">
        <ul class="primary-nav-list">
          <!-- <li :class="actualScreen === 'home' ? 'active' : ''" @click="handleTab('home')">Início</li> -->
          <!-- <li :class="actualScreen === 'series' ? 'active' : ''" @click="handleTab('series')">Séries</li> -->
          <!-- <li :class="actualScreen === 'movies' ? 'active' : ''" @click="handleTab('movies')">Filmes</li> -->
          <!-- <li :class="actualScreen === 'my-list' ? 'active' : ''" @click="handlePageRedirect('my-list')">Minha Lista</li> -->
          <li @click="handlePageRedirect('home')">Início</li>
          <li @click="handlePageRedirect('series')">Séries</li>
          <li @click="handlePageRedirect('movies')">Filmes</li>
          <li @click="handlePageRedirect('my-list')">Minha Lista</li>
        </ul>
      </nav>
    </div>

    <!-- <nav class="secondary-nav" v-if="['/search', '/home', '/my-list'].includes($route.path)">
      <input type="search" class="input-search" id="input-search" v-model="searchShow" />
      <i class="material-icons search-icon" @click="search">search</i>
      <span class="secondary-nav--logout" @click="logout">Sair</span>
      <img
        class="secondary-nav--user"
        src="https://occ-0-759-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"
        height="35"
        alt="User Icon"
        @click="toogleUser"
      />
    </nav> -->
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const props = defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
});

const store = useStore();
const router = useRouter();

const searchShow = ref("");
const topDistance = ref(0);

const show = computed(() => store.getters["show/getShowType"]);

const handlePageRedirect = (page: string) => {
  router.push(page);
};

watch(
  () => searchShow.value,
  () => {
    if (searchShow.value) {
      // $router.push({ path: "/search", query: { q: searchShow } });
    } else {
      // $router.push("/home");
      // document.getElementById("input-search")?.classList.remove("input-search-focus");
    }
  }
);
// @Options({
//   methods: {
//     ...mapActions("show", ["ActionSetShowType"]),
//     ...mapActions("account", ["ActionSetToken", "ActionSetId"]),
//   },
// })
// export default class Header extends Vue {
//   topDistance = 0;
//   getShowType!: string;
//   searchShow!: string;
//   ActionSetShowType!: (page: string) => void;
//   ActionSetToken!: (token: string | undefined) => void;
//   ActionSetId!: (id: number | undefined) => void;

//   created(): void {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   mounted(): void {
//     this.validateSeachShow();
//   }

//   get actualScreen(): string {
//     return this.$route.path === "/my-list" ? "my-list" : this.getShowType;
//   }

//   validateSeachShow(): void {
//     if (this.$route.path === "/search" && !this.searchShow) {
//       this.$router.push("/home");
//       document.getElementById("input-search")?.blur();
//     }
//   }

//   handleScroll(): void {
//     this.topDistance = window.pageYOffset;
//   }

//   handlePageRedirect(page: string): void {
//     this.$router.push(page);
//   }

//   handleTab(page: string): void {
//     if (this.$route.path !== "/home") this.handlePageRedirect("home");
//     this.ActionSetShowType(page);
//     this.$emit("handlePageRedirect");
//   }

//   search(): void {
//     document
//       .getElementById("input-search")
//       ?.classList.add("input-search-focus");
//   }

//   logout(): void {
//     this.ActionSetToken(undefined);
//     this.ActionSetId(undefined);
//     this.$router.push("/");
//   }

//   toogleUser(): void {
//     this.$router.push("/profiles");
//   }
// }
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
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 62px;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;

  > div {
    display: flex;
    align-items: center;
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
      font-size: 28px;
      left: 5px;
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

    .input-search-focus {
      width: 260px;
      border-width: 1px;
      background-color: var(--black);
    }

    .secondary-nav--logout {
      cursor: pointer;
      font-weight: bold;
      margin: 0 25px 0 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    .secondary-nav--user {
      cursor: pointer;
    }
  }
}
</style>
