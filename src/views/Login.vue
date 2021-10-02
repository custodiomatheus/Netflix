<template>
  <div class="container">
    <FormCard
      title="Login"
      action="Entrar"
      :isLogin="true"
      v-on:action="login"
      :actionError="loginError"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

import Header from "../components/Header.vue";
import FormCard from "../components/FormCard.vue";

import { Flat } from "@/types/FlatType";

@Options({
  data() {
    return {
      loginError: "",
    };
  },
  computed: {
    ...mapGetters("account", ["getToken"]),
  },
  methods: {
    ...mapActions("account", ["ActionSetToken", "ActionSetId", "ActionSetFlat"]),
  },
  components: {
    Header,
    FormCard,
  },
})
export default class Login extends Vue {
  getToken!: string | undefined;
  loginError!: string;
  ActionSetToken!: (token: string) => void;
  ActionSetId!: (id: number) => void;
  ActionSetFlat!: (flat: Flat) => void;

  login(credentials: { email: string; password: string }): void {
    const { email, password } = credentials;
    axios
      .post(`http://${process.env.VUE_APP_ROOT_BASE_URL}/accounts/login`, {
        email,
        password,
      })
      .then((response) => {
        const { id, token, flat } = response.data;
        
        this.loginError = "";
        this.ActionSetToken(token);
        this.ActionSetId(id);
        this.ActionSetFlat(flat);
        this.$router.push("/profiles");
      })
      .catch((error) => {
        if ([403, 401].includes(error.response.status)) {
          this.loginError =
            "Desculpe, seu email e / ou senha estão inválidos :/. Tente novamente ou cadastre-se.";
        }
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
  display: flex;
  justify-content: center;
}
</style>
