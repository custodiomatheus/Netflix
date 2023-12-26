export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    handleLogin({ userEmail, userPassword }: { userEmail: string; userPassword: string }): void {
      console.log("teste");
    },
  },
};
