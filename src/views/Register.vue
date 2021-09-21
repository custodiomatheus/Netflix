<template>
  <div class="container">
    <section class="register">
      <h1 class="register--title">Crie sua assinatura</h1>

      <form class="register--form">
        <input
          v-model="email"
          class="register--email"
          type="email"
          placeholder="Email"
        />
        <input
          v-model="password"
          class="register--password"
          type="password"
          placeholder="Senha"
        />

        <select v-model="flat" class="register--flat">
          <option :value="flat" v-for="(flat, index) in flats" :key="flat.id">
            {{ flat.name }} - {{ flatPrice[index] }}
          </option>
        </select>

        <button class="register--button" @click.prevent="register">
          Cadastre-se
        </button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
      flats: [] as Flat[],
    };
  },
  components: {
    Header,
  },
})
export default class Register extends Vue {
  email!: string;
  password!: string;
  flat!: Flat;
  flats!: Flat[];
  getToken!: string | undefined;

  mounted(): void {
    this.findFlats();
  }

  get flatPrice(): string[] {
    return this.flats.map(flat => `R$ ${flat.price.toString().replace('.', ',')}`)
  }

  findFlats(): void {
    axios
      .get(`http://${process.env.VUE_APP_ROOT_BASE_URL}/flats`)
      .then((response) => (this.flats = [...response.data]))
      .catch((error) => {
        console.error(error);
      });
  }

  register(): void {
    axios
      .post(`http://${process.env.VUE_APP_ROOT_BASE_URL}/accounts`, {
        email: this.email,
        password: this.password,
        flat: this.flat,
      })
      .then(() => this.$router.push("/login"))
      .catch((error) => console.log(error));
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
.register {
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
