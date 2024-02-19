<template>
  <div class="container container__authentication">
    <div class="container__authentication-form">
      <BaseForm title="Entrar" button-text="Entre" :schema="schema" :submit="handleLogin" />

      <span> Não possui conta? <router-link :to="{ name: 'Register' }">Assine agora.</router-link> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import BaseForm from "@/components/Base/BaseForm";
import useNavigate from "@/composables/useNavigate";
import { UserLoginCredentials } from "@/types/UserType";
import { FormDefaultFields } from "@/helpers/constants/formDefaultFields";

const store = useStore();
const { handlePageNavigation } = useNavigate();

const schema = ref([
  { ...FormDefaultFields.EMAIL, name: "userEmail" },
  { ...FormDefaultFields.PASSWORD, name: "userPassword" },
]);

const handleLogin = async (credentials: UserLoginCredentials) => {
  await store.dispatch("auth/handleLogin", {
    userEmail: credentials.userEmail,
    userPassword: credentials.userPassword,
  });

  handlePageNavigation({ name: "Home" });
};
</script>
