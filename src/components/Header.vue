<template>
  <header>
    <h1>NETFLIX</h1>

    <nav class="primary-nav">
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
export default {};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 75px;
  background: transparent;
  display: flex;
  align-items: center;
  padding-left: 62px;
  position: fixed;
  z-index: 999;

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