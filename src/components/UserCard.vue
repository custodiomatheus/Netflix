<template>
  <UserForm
    v-if="isUserFormOpen"
    :user="user"
    :title="false"
    @closeUserForm="closeUserForm"
  />
  <div :class="['user', { 'is-edit': isManage }]" @click="selectedUser">
    <div class="user--card">
      <i v-if="isManage" class="material-icons user--edit"> edit </i>
    </div>
    <p :class="['user--nickname']">{{ user.nickname }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

import UserForm from "./UserForm.vue";

import { User } from "../types/UserType";

@Options({
  data() {
    return {
      isUserFormOpen: false as boolean,
    };
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
    isManage: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    ...mapActions("user", [
      "ActionSetUserId",
      "ActionSetUserNickname",
      "ActionSetUserFavorites",
      "ActionSetUserWatched",
    ]),
  },
  components: {
    UserForm,
  },
})
export default class UserCard extends Vue {
  isManage!: boolean;
  user!: User;
  isUserFormOpen!: boolean;
  ActionSetUserId!: (id: number) => void;
  ActionSetUserNickname!: (nickname: string) => void;
  ActionSetUserFavorites!: (favorites: number[]) => void;
  ActionSetUserWatched!: (favorites: number[]) => void;

  selectedUser(): void {
    this.isManage ? this.startEditUser() : this.redirectUserHome();
  }

  startEditUser(): void {
    this.isUserFormOpen = true;
  }

  redirectUserHome(): void {
    this.$router.push("/home");
    this.ActionSetUserId(this.user.id);
    this.ActionSetUserNickname(this.user.nickname);
  }

  closeUserForm(): void {
    this.isUserFormOpen = false;
  }
}
</script>

<style lang="scss" scoped>
.user {
  text-align: center;
  word-break: break-all;
  min-width: 165px;
  cursor: pointer;
  position: relative;

  &:hover &--card {
    border-color: var(--white);
  }

  &:hover &--edit-nickname,
  &:hover &--nickname {
    color: var(--white);
  }

  &--card {
    width: 100%;
    height: 170px;
    border-radius: 5px;
    background-image: url("https://occ-0-759-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--black);
  }

  &--nickname {
    font-size: 18px;
    color: var(--gray);
    margin: 10px 0 0;
  }
}

.is-edit {
  filter: brightness(0.5);
}
</style>