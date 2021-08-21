<template>
  <div :class="['user', { 'is-edit': isEdit }]" @click="selectedUser">
    <div :class="['user--card']">
      <i v-if="isEdit" class="material-icons user--edit"> edit </i>
    </div>
    <p :class="['user--nickname']">{{ user.nickname }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { User } from "../types/UserType";

@Options({
  data() {
    return {
      nickname: "" as string,
    };
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
    isEdit: {
      type: Boolean,
      require: true,
    },
  },
})
export default class UserCard extends Vue {
  isEdit!: boolean;
  user!: User;
  nickname!: string;

  mounted() {
    this.nickname = this.user.nickname;
  }

  selectedUser() {
    this.isEdit ? this.editNickname() : this.redirectUserHome();
  }

  editNickname() {
    console.log(this.nickname);

    /**
     * TODO -> Abrir modal
     *         Editar o nickaname
     *         Ao salvar enviar para a API
     */
  }

  redirectUserHome() {
    this.$router.push("/home");

    /**
     * TODO -> Adicionar o usuário selecionado na store
     *         para isso precisa criar a store de user
     */
  }
}
</script>

<style lang="scss" scoped>
.user {
  text-align: center;
  word-break: break-all;
  width: 165px;
  cursor: pointer;
  position: relative;

  &:hover &--card {
    border: 3px solid var(--white);
  }

  &:hover &--edit-nickname,
  &:hover &--nickname {
    color: var(--white);
  }

  &--card {
    width: 100%;
    height: 170px;
    border-radius: 5px;
    background-image: url("https://super.abril.com.br/wp-content/uploads/2016/07/1-ragnar.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
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