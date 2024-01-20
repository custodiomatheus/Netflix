<template>
  <div class="container">
    <div class="container__form">
      <BaseForm title="Entrar" :schema="schema" :submit="handleLogin" />

      <span> Não possui conta? <router-link :to="{ name: 'AuthRegister' }">Assine agora.</router-link> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import BaseForm from "@/components/Base/BaseForm";
import useNavigate from "@/composables/useNavigate";
import { FormDefaultFields } from "@/helpers/constants/formDefaultFields";

const store = useStore();
const { handlePageNavigation } = useNavigate();

const schema = ref([FormDefaultFields.EMAIL, FormDefaultFields.PASSWORD]);

const handleLogin = async (credentials: { email: string; password: string }) => {
  await store.dispatch("auth/handleLogin", { userEmail: credentials.email, userPassword: credentials.password });

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
