<template>
  <div class="container">
    <section class="flats">
      <h1 class="flats--title">Selecione um plano</h1>

      <ul class="flats--list">
        <li class="flats--item" v-for="flat in flats" :key="flat">
          <input
            type="radio"
            name="flat"
            class="flats--radio"
            :id="flat.id"
            :checked="flat.id === 1"
            @click="selectFlat(flat)"
          />
          <FlatCard :flat="flat" class="flats--element" />
        </li>
      </ul>
    </section>

    <section class="form">
      <div class="register">
        <h1 class="register--title">Cadastrar</h1>

        <form class="register--form">
          <div class="register--item">
            <input
              v-model="email"
              :class="['register--email', { 'field-error': error.email }]"
              type="email"
              placeholder="Email"
            />
            <label v-if="error.email" class="register--error"
              >Informe um email válido.</label
            >
          </div>

          <div class="register--item">
            <input
              v-model="password"
              :class="['register--password', { 'field-error': error.password }]"
              type="password"
              placeholder="Senha"
            />
            <label v-if="error.password" class="register--error"
              >A senha deve ter no mínimo 8 caracteres.</label
            >
          </div>

          <button class="register--button" @click.prevent="register">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

import FlatCard from "@/components/Register/FlatCard.vue";

import { validateEmail } from "@/helpers/validation";

interface Flat {
  id: number;
  name: string;
  price: number;
  amountScreen: number;
}

@Options({
  data() {
    return {
      email: "" as string,
      password: "" as string,
      flat: {} as Flat,
      flats: [] as Flat[],
      error: {
        email: false,
        password: false,
        flat: false,
      },
    };
  },
  components: {
    FlatCard,
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
export default class Register extends Vue {
  email!: string;
  password!: string;
  flat!: Flat;
  flats!: Flat[];
  getToken!: string | undefined;
  error!: { email: boolean; password: boolean; flat: boolean };
  validateEmail!: (email: string) => boolean;

  mounted(): void {
    this.findFlats();
  }

  get flatPrice(): string[] {
    return this.flats.map(
      (flat) => `R$ ${flat.price.toString().replace(".", ",")}`
    );
  }

  selectFlat(flat: Flat): void {
    this.flat = flat;
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
    this.error.email = !this.validateEmail(this.email);
    this.error.password = this.password.length <= 8;

    
    if (!this.error.email && !this.error.password) {
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
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8%;
}

.flats,
.form {
  max-width: 45vw;
  height: 100%;
}

.flats {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    & {
      margin-bottom: 3%;
    }
  }

  @media screen and (max-width: 1100px) {
    & {
      padding-top: 5%;
    }
  }

  &--title {
    font-size: 30px;
    color: var(--red);
    text-align: center;
    margin: 0;
  }

  &--list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5%;
  }

  &--item {
    position: relative;
    margin-top: 3%;

    &:nth-child(3n) {
      align-self: flex-end;
    }
  }

  &--radio {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked:checked + .flats--element {
      background: red;
    }
  }
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;

  .register {
    width: 400px;
    height: 420px;
    background-color: rgba(#000000, 0.75);
    padding: 45px 50px 0;
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
      margin: 15px 0 0;
      cursor: pointer;
    }
  }
}
</style>
