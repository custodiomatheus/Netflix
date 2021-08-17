<template>
  <div class="container">
    <Header />

    <section class="profile">
      <h1 class="profile--title">Quem está assistindo?</h1>

      <div class="profile--users">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "../components/Header.vue";
import UserCard from "../components/UserCard.vue";

@Options({
  components: {
    Header,
    UserCard,
  },
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>

.card {
  width: 165px;
  height: 170px;
  border-radius: 5px;
  background-color: #C4C4C4;
}

.container {
  width: 100%;
  position: fixed;
}

.profile {
  width: 70%;
  margin: 15vh auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &--title {
    font-size: 48px;
  }

  &--users {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
  }
}
</style>