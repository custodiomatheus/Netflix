<template>
  <div class="container container__authentication">
    <div class="container__authentication-form">
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
