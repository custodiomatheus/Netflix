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
    <img
      src="https://image.tmdb.org/t/p/w300/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
      :height="$route.path === '/login' ? 50 : 32"
      alt=""
    />

    <nav class="primary-nav" v-if="$route.path === '/home'">
      <ul class="primary-nav-list">
        <li class="primary-nav-list__item active">Início</li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Bombando</li>
        <li>Minha Lista</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

Options({
  data() {
    return {
      topDistance: 0,
    };
  },
});

export default class Header extends Vue {
  topDistance = 0;

  created(): void {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(): void {
    this.topDistance = window.pageYOffset;
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
  padding: 3.5vh 62px;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.5s;

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
}
</style>