<template>
  <!-- TODO: USE SOME LIB -->
  <section class="form">
    <div class="card">
      <h1 class="card--title">{{ title }}</h1>
      <!-- <Message v-if="actionError" :message="actionError" :color="'var(--orange)'" /> -->

      <form class="card--form" @submit.prevent="handleSubmit">
        <div class="card--item">
          <input
            :class="['card--email', { 'field-error': formFieldsErrors.email }]"
            v-model="formFields.email"
            type="email"
            placeholder="Email"
          />
          <label v-if="formFieldsErrors.email" class="card--error">Informe um email válido.</label>
        </div>

        <div class="card--item">
          <input
            :class="['card--password', { 'field-error': formFieldsErrors.password }]"
            v-model="formFields.password"
            type="password"
            placeholder="Senha"
          />
          <label v-if="formFieldsErrors.password" class="card--error">A senha deve ter no mínimo 8 caracteres.</label>
        </div>

        <button class="card--button">
          {{ actionButton }}
        </button>
      </form>

      <div v-if="isLogin" class="card--actions">
        <div>
          <input type="checkbox" id="check-remember" />
          <label class="card--remember" for="check-remember">Lembre-se de mim</label>
        </div>

        <label class="card--register" @click="handlePageNavigation({ name: 'AuthRegister' })">Cadastre-se agora</label>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import useNavigate from "@/composables/useNavigate";
import { validateEmail } from "@/helpers/validation";
import { BaseFormProps, FormField, FormFieldsErrors } from "@/types/components/BaseFormType";
// import Message from "@/components/Message.vue"

const emit = defineEmits<{ onSubmit: [email: string, password: string] }>();
withDefaults(defineProps<BaseFormProps>(), { isLogin: false, actionButton: "Entrar" });

const { handlePageNavigation } = useNavigate();

const formFields: FormField = reactive({ email: "", password: "" });
const formFieldsErrors: FormFieldsErrors = reactive({ email: false, password: false });

const handleSubmit = (): void => {
  formFieldsErrors.email = !validateEmail(formFields.email);
  formFieldsErrors.password = formFields.password.length <= 8;

  if (!formFieldsErrors.email && !formFieldsErrors.password) {
    emit("onSubmit", formFields.email, formFields.password);
  }
};

watch(
  () => formFields.email,
  () => {
    formFieldsErrors.email = !validateEmail(formFields.email);
  }
);

watch(
  () => formFields.password,
  () => {
    formFieldsErrors.password = formFields.password.length <= 8;
  }
);
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 400px;
    height: fit-content;
    background-color: rgba(#000000, 0.75);
    padding: 45px 50px 60px;
    border-radius: 8px;

    &--form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &--item {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      gap: 5px;
    }

    &--error {
      color: #e87c03;
      font-size: 15px;
    }

    &--email,
    &--password {
      width: inherit;
      height: 45px;
      padding-left: 15px;
      border-radius: 5px;
      background-color: var(--gray-secondary);
      color: var(--white);
      font-size: 14px;
    }

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #8c8c8c;
      font-size: 14px;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #8c8c8c;
      font-size: 14px;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #8c8c8c;
      font-size: 14px;
    }

    &--button {
      height: 47px;
      border: none;
      border-radius: 5px;
      color: var(--white);
      background-color: var(--red);
      font-size: 18px;
      font-weight: 700;
      margin: 15px 0;
      cursor: pointer;
    }

    &--actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--remember {
      font-size: 12px;
      font-weight: lighter;
      cursor: pointer;
    }

    &--register {
      font-size: 14px;
      font-weight: normal;
      cursor: pointer;
    }
  }
}
</style>
