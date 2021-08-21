<template>
  <div class="container">
    <Header />

    <section class="profile">
      <h1 class="profile--title">Quem está assistindo?</h1>

      <div class="profile--users" v-for="user in users" :key="user.id">
        <UserCard :user="user" :isEdit="isEdit" />

        <i v-if="users.length < 5" class="material-icons profile--add"> add_circle_outline </i>
      </div>

      <span @click="verifyStartOrFinishEdit" class="profile--manage-start">
        {{ isEdit ? "OK" : "Gerenciar Perfis" }}
      </span>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

import Header from "../components/Header.vue";
import UserCard from "../components/UserCard.vue";

import api from "../service/api";
import { User } from "../types/UserType";

@Options({
  data() {
    return {
      users: [] as User[],
      isEdit: false as boolean,
    };
  },
  components: {
    Header,
    UserCard,
  },
  computed: {
    ...mapGetters("account", ["getToken", "getId"]),
  },
})
export default class Profile extends Vue {
  getToken!: string | undefined;
  getId!: string | undefined;
  users!: User[];
  isEdit!: boolean;

  mounted() {
    this.findAccountProfiles();
  }

  findAccountProfiles() {
    api
      .get(`/account/users/${this.getId}`)
      .then((response) => {
        this.users.push(...response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addUser() {
    /**
     * TODO -> Abrir o modal
     *         Escolher nickname
     *         Ao salvar mandar pra API
     */
  }

  verifyStartOrFinishEdit() {
    !this.isEdit ? this.startEditNickname() : this.finishEditNickname();
  }

  startEditNickname() {
    this.isEdit = true;
  }

  finishEditNickname() {
    this.isEdit = false;
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 165px;
  height: 170px;
  border-radius: 5px;
  background-color: #c4c4c4;
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
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.5%;
  }

  &--add {
    font-size: 100px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  &--manage-start,
  &--manage-finish {
    margin-top: 5vh;
    padding: 1% 3%;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
  }

  &--manage-start {
    background-color: transparent;
    border: 1px solid var(--gray);
    color: var(--gray);
  }

  &--manage-start:hover {
    border-color: var(--white);
    color: var(--white);
  }

  &--manage-finish {
    background-color: var(--white);
    border: 1px solid var(--white);
    color: var(--black);
    font-weight: 700;
  }

  &--manage-finish:hover {
    background-color: var(--red);
    border-color: var(--red);
    color: var(--white);
  }
}
</style>