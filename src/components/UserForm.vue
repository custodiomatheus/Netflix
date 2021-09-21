<template>
  <div class="modal">
    <div class="modal--content">
      <h1 class="modal--title">
        {{ isAddUser ? "Adicionar perfil" : "Editar perfil" }}
      </h1>
      <hr />
      <form class="modal--form" action="">
        <input v-model="nickname" class="modal--nickname" type="text" />

        <button
          class="modal--save"
          @click.prevent="isAddUser ? saveUser() : updateUser()"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

import api from "../service/api";
import { User } from "../types/UserType";

@Options({
  data() {
    return {
      nickname: "" as string,
    };
  },
  props: {
    isAddUser: {
      type: Boolean,
      require: true,
    },
    user: {
      type: Object,
      require: false,
    },
  },
  computed: {
    ...mapGetters("account", ["getId"]),
  },
})
export default class UserForm extends Vue {
  isAddUser!: boolean;
  nickname!: string;
  user!: User;
  getId!: string | undefined;

  mounted(): void {
    this.nickname = this.user?.nickname;
  }

  saveUser(): void {
    api
      .post("/users", {
        nickname: this.nickname,
        account: {
          id: this.getId,
        },
      })
      .then(() => this.closeUserForm())
      .catch((error) => {
        console.log(error);
      });
  }

  updateUser(): void {
    this.user.nickname = this.nickname;

    api
      .patch("/users", this.user)
      .then(() => this.closeUserForm())
      .catch((error) => {
        console.log(error);
      });
  }

  closeUserForm(): void {
    this.$emit("closeUserForm");
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: var(--black);
  z-index: 1;

  &--content {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    padding: 5vh 5vw;
  }

  &--title {
    font-size: 50px;
    margin: 0;
    font-weight: 500;
    color: var(--white);
  }

  &--form {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--nickname {
    width: 300px;
    border: none;
    background-color: var(--gray);
    color: var(--white);
    padding: 8px 10px;
    font-size: 18px;
  }

  &--save {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
    padding: 2% 3%;
    margin-top: 5vh;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--white);

    &:hover {
      background-color: var(--red);
      border-color: var(--red);
      color: var(--white);
    }
  }
}
</style>