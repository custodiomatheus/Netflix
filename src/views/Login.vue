<template>
  <div class="container">
    <section class="login">
      <h1 class="login--title">
        {{ isRegister ? "Crie sua assinatura" : "Entrar" }}
      </h1>

      <form class="login--form">
        <input
          v-model="email"
          class="login--email"
          type="email"
          placeholder="Email"
        />
        <input
          v-model="password"
          class="login--password"
          type="password"
          placeholder="Senha"
        />

        <select v-if="isRegister" v-model="flat" class="login--flat">
          <option :value="flat" v-for="flat in flats" :key="flat.id">
            {{ flat.name }}
          </option>
        </select>

        <button class="login--button" @click.prevent="loginOrRegister">
          {{ isRegister ? "Cadastre-se" : "Entrar" }}
        </button>

        <div v-if="!isRegister" class="login--actions">
          <div>
            <input type="checkbox" id="check-remember" />
            <label class="login--remember" for="check-remember"
              >Lembre-se de mim</label
            >
          </div>

          <label class="login--register">Cadastre-se agora</label>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

import Header from "../components/Header.vue";

interface Flat {
  id: number;
  name: string;
  price: number;
}

@Options({
  data() {
    return {
      email: "" as string,
      password: "" as string,
      flat: {} as Flat,
      isRegister: false as boolean,
      flats: [] as Flat[],
    };
  },
  computed: {
    ...mapGetters("account", ["getToken"]),
  },
  methods: {
    ...mapActions("account", ["ActionSetToken", "ActionSetId"]),
  },
  components: {
    Header,
  },
})
export default class Login extends Vue {
  email!: string;
  password!: string;
  flat!: Flat;
  isRegister!: boolean;
  flats!: Flat[];
  getToken!: string | undefined;
  ActionSetToken!: (token: string) => void;
  ActionSetId!: (id: number) => void;

  mounted(): void {
    this.isRegister = this.$route.path.includes("cadastro");

    this.findFlats();
  }

  findFlats(): void {
    axios
      .get(`http://${process.env.VUE_APP_ROOT_BASE_URL}/flat`)
      .then((response) => (this.flats = [...response.data]))
      .catch((error) => {
        console.error(error);
      });
  }

  loginOrRegister() {
    this.isRegister ? this.register() : this.login();
  }

  register(): void {
    axios
      .post(`http://${process.env.VUE_APP_ROOT_BASE_URL}/account`, {
        email: this.email,
        password: this.password,
        flat: this.flat,
      })
      .then(() => this.$router.push("/login"))
      .catch((error) => console.log(error));
  }

  login(): void {
    axios
      .post(`http://${process.env.VUE_APP_ROOT_BASE_URL}/account/login`, {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        const { id, token } = response.data;

        this.ActionSetToken(token);
        this.ActionSetId(id);
        this.$router.push("/profiles");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: url("../assets/background-login.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: fixed;
}
.login {
  width: 430px;
  height: 500px;
  background-color: rgba(#000000, 0.75);
  margin: 20vh auto 0;
  padding: 45px 65px 0;
  border-radius: 8px;

  &--form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &--email,
  &--password,
  &--flat {
    width: inherit;
    height: 45px;
    padding-left: 15px;
    border: none;
    border-radius: 5px;
    background-color: var(--gray-secondary);
    color: var(--white);
    font-size: 14px;
    margin-bottom: 20px;
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

  &--button,
  &--remember,
  &--register {
    cursor: pointer;
  }

  &--button {
    height: 47px;
    border: none;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--red);
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0;
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
  }
}
</style>
