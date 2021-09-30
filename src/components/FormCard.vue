<template>
  <section class="form">
    <div class="card">
      <h1 class="card--title">{{ title }}</h1>
      <Message v-if="actionError" :message="actionError" :color="'var(--orange)'" />
      <form class="card--form">
        <div class="card--item">
          <input
            v-model="email"
            :class="['card--email', { 'field-error': error.email }]"
            type="email"
            placeholder="Email"
          />
          <label v-if="error.email" class="card--error"
            >Informe um email válido.</label
          >
        </div>

        <div class="card--item">
          <input
            v-model="password"
            :class="['card--password', { 'field-error': error.password }]"
            type="password"
            placeholder="Senha"
          />
          <label v-if="error.password" class="card--error"
            >A senha deve ter no mínimo 8 caracteres.</label
          >
        </div>

        <button class="card--button" @click.prevent="executeAction">
          {{ action }}
        </button>
      </form>

      <div v-if="isLogin" class="card--actions">
        <div>
          <input type="checkbox" id="check-remember" />
          <label class="card--remember" for="check-remember"
            >Lembre-se de mim</label
          >
        </div>

        <label class="card--register" @click="registerRedirect"
          >Cadastre-se agora</label
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Message from "@/components/Message.vue"

import { validateEmail } from "@/helpers/validation";

@Options({
  props: {
    title: {
      type: String,
      require: true,
    },
    action: {
      type: String,
      require: true,
    },
    isLogin: {
      type: Boolean,
      require: false,
      default: false,
    },
    actionError: {
      type: String,
      require: false,
      default: ""
    }
  },
  data() {
    return {
      email: "" as string,
      password: "" as string,
      error: {
        email: false,
        password: false,
        flat: false,
      },
    };
  },
  components: {
    Message
  },
  methods: {
    validateEmail,
  },
  watch: {
    email() {
      this.error.email = !this.validateEmail(this.email);
    },
    password() {
      if (this.error.password) {
        this.error.password = this.password.length <= 8;
      }
    },
  },
})
export default class FormCard extends Vue {
  action!: string;
  email!: string;
  password!: string;
  error!: { email: boolean; password: boolean; flat: boolean };
  validateEmail!: (email: string) => boolean;

  executeAction(): void {
    this.error.email = !this.validateEmail(this.email);
    this.error.password = this.password.length <= 8;

    if (!this.error.email && !this.error.password) {
      this.$emit("action", { email: this.email, password: this.password });
    }
  }

  registerRedirect(): void {
    this.$router.push("/register");
  }
}
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
