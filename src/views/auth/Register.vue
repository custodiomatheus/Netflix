<template>
  <div class="container">
    <div class="container__form">
      <BaseForm title="Criar conta" button-text="Criar conta" :schema="schema" :submit="handleRegister" />

      <span> Já possui conta? <router-link :to="{ name: 'Login' }">Voltar ao Login.</router-link> </span>
    </div>
  </div>
  <!-- <div class="container">
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

    <FormCard title="Cadastro" action="Cadastrar" v-on:action="register" />
  </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import BaseForm from "@/components/Base/BaseForm";
import useNavigate from "@/composables/useNavigate";
import { FormDefaultFields } from "@/helpers/constants/formDefaultFields";

const store = useStore();
const { handlePageNavigation } = useNavigate();

// TODO: ADD CONFIRMAR SENHA
const schema = ref([
  FormDefaultFields.FULLNAME,
  FormDefaultFields.EMAIL,
  FormDefaultFields.PASSWORD,
  // FormDefaultFields.CONFIRMED_PASSWORD,
]);

const handleRegister = async (credentials: { name: string; email: string; password: string; lgpd: boolean }) => {
  await store.dispatch("auth/handleRegister", {
    userName: credentials.name,
    userEmail: credentials.email,
    userPassword: credentials.password,
  });

  handlePageNavigation({ name: "Home" });
};
// import { Options, Vue } from "vue-class-component";
// import axios from "axios";

// import FlatCard from "@/components/Register/FlatCard.vue";
// import FormCard from "@/components/FormCard.vue";

// interface Flat {
//   id: number;
//   name: string;
//   price: number;
//   amountScreen: number;
// }

// @Options({
//   data() {
//     return {
//       flat: {} as Flat,
//       flats: [] as Flat[],
//     };
//   },
//   components: {
//     FlatCard,
//     FormCard,
//   },
// })
// export default class Register extends Vue {
//   flat!: Flat;
//   flats!: Flat[];

//   async mounted(): Promise<void> {
//     await this.findFlats();

//     if (this.flats.length) {
//       this.flat = this.flats[0];
//     }
//   }

//   get flatPrice(): string[] {
//     return this.flats.map(
//       (flat) => `R$ ${flat.price.toString().replace(".", ",")}`
//     );
//   }

//   selectFlat(flat: Flat): void {
//     this.flat = flat;
//   }

//   async findFlats(): Promise<void> {
//     try {
//       const response = await axios.get(
//         `http://${process.env.VUE_APP_ROOT_BASE_URL}/flats`
//       );
//       this.flats = [...response.data];
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   register(credentials: { email: string; password: string }): void {
//     const { email, password } = credentials;

//     if (this.flat.id) {
//       axios
//         .post(`http://${process.env.VUE_APP_ROOT_BASE_URL}/accounts`, {
//           email,
//           password,
//           flat: this.flat,
//         })
//         .then(() => this.$router.push("/login"))
//         .catch((error) => console.log(error));
//     }
//   }
// }
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
// .container {
//   width: 100%;
//   min-height: 100vh;
//   background-color: var(--black);
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   gap: 8%;
// }

// .flats,
// .form {
//   max-width: 45vw;
//   height: 100%;
// }

// .flats {
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (max-width: 700px) {
//     & {
//       margin-bottom: 3%;
//     }
//   }

//   @media screen and (max-width: 1100px) {
//     & {
//       padding-top: 5%;
//     }
//   }

//   &--title {
//     font-size: 30px;
//     color: var(--red);
//     text-align: center;
//     margin: 0;
//   }

//   &--list {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 5%;
//   }

//   &--item {
//     position: relative;
//     margin-top: 3%;

//     &:nth-child(3n) {
//       align-self: flex-end;
//     }
//   }

//   &--radio {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;

//     &:checked:checked + .flats--element {
//       background-color: var(--red);
//     }
//   }
// }

// .form {
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .register {
//     width: 400px;
//     height: 420px;
//     background-color: rgba(#000000, 0.75);
//     padding: 45px 50px 0;
//     border-radius: 8px;

//     &--form {
//       width: 100%;
//       display: flex;
//       flex-direction: column;
//     }

//     &--item {
//       display: flex;
//       flex-direction: column;
//       margin-bottom: 20px;
//       gap: 5px;
//     }

//     &--error {
//       color: #e87c03;
//       font-size: 15px;
//     }

//     &--email,
//     &--password {
//       width: inherit;
//       height: 45px;
//       padding-left: 15px;
//       border-radius: 5px;
//       background-color: var(--gray-secondary);
//       color: var(--white);
//       font-size: 14px;
//     }

//     ::placeholder {
//       /* Chrome, Firefox, Opera, Safari 10.1+ */
//       color: #8c8c8c;
//       font-size: 14px;
//     }

//     :-ms-input-placeholder {
//       /* Internet Explorer 10-11 */
//       color: #8c8c8c;
//       font-size: 14px;
//     }

//     ::-ms-input-placeholder {
//       /* Microsoft Edge */
//       color: #8c8c8c;
//       font-size: 14px;
//     }

//     &--button {
//       height: 47px;
//       border: none;
//       border-radius: 5px;
//       color: var(--white);
//       background-color: var(--red);
//       font-size: 18px;
//       font-weight: 700;
//       margin: 15px 0 0;
//       cursor: pointer;
//     }
//   }
// }
</style>
