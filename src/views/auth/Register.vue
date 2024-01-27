<template>
  <div class="container">
    <div class="container__form">
      <BaseForm title="Criar conta" button-text="Criar conta" :schema="schema" :submit="handleRegister" />

      <span> Já possui conta? <router-link :to="{ name: 'Login' }">Voltar ao Login.</router-link> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { User } from "@/types/UserType";
import BaseForm from "@/components/Base/BaseForm";
import useNavigate from "@/composables/useNavigate";
import { FormDefaultFields } from "@/helpers/constants/formDefaultFields";

const store = useStore();
const { handlePageNavigation } = useNavigate();

// TODO: ADD CONFIRMAR SENHA
const schema = ref([
  { ...FormDefaultFields.FULLNAME, name: "userName" },
  { ...FormDefaultFields.EMAIL, name: "userEmail" },
  { ...FormDefaultFields.PASSWORD, name: "userPassword" },
]);

const handleRegister = async (credentials: User) => {
  await store.dispatch("auth/handleRegister", {
    userName: credentials.userName,
    userEmail: credentials.userEmail,
    userPassword: credentials.userPassword,
  });

  handlePageNavigation({ name: "Home" });
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  padding-top: $header-height-size;
  background-image: url("@/assets/images/background-login.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  &__form {
    width: 500px;
    padding: 60px 68px 40px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;

    > span {
      color: $gray-700;

      > a {
        color: $white;
      }
    }
  }
}
</style>
