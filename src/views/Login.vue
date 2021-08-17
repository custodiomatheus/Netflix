<template>
  <div class="container">
    <Header />

    <section class="login">
      <h1 class="login--title">Entrar</h1>

      <form class="login--form">
        <input class="login--email" type="email" placeholder="Email" />
        <input class="login--password" type="password" placeholder="Senha" />

        <button class="login--button" @click="login">Entrar</button>

        <div class="login--actions">
          <div>
            <input type="checkbox" id="check-remember" />
            <label class="login--remember" for="check-remember">Lembre-se de mim</label>
          </div>

          <label class="login--register">Cadastre-se agora</label>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "../components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Login extends Vue {

  login(e: any) {
    e.preventDefault();
    this.$router.push("/profiles");
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
  &--password {
    width: inherit;
    height: 45px;
    padding-left: 15px;
    border: none;
    border-radius: 5px;
    background-color: var(--gray-secondary);
    color: var(--white);
    font-size: 14px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #8C8C8C;
    font-size: 14px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #8C8C8C;
    font-size: 14px;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #8C8C8C;
    font-size: 14px;
  }

  &--email {
    margin-bottom: 20px;
  }

  &--password {
    margin-bottom: 40px;
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
    margin-bottom: 10px;
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
