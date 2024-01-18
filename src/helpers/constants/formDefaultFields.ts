export const FormDefaultFields = {
  EMAIL: {
    label: { text: "E-mail" },
    name: "email",
    placeholder: "Insira seu e-mail",
    type: "email",
    rules: "required|email",
  },
  PASSWORD: {
    label: { text: "Senha" },
    name: "password",
    placeholder: "Insira sua senha",
    type: "password",
    maxlength: 50,
    rules: "required|min:8|max:50",
  },
  FULLNAME: {
    label: { text: "Nome completo" },
    name: "name",
    placeholder: "Digite seu nome",
    type: "text",
    rules: "required|alpha_spaces|fullname",
  },
  PHONE: {
    label: { text: "Celular" },
    name: "phone",
    placeholder: "(11) 99999-9999",
    type: "tel",
    mask: ["(##) ####-####", "(##) #####-####"],
    rules: "required|phone",
  },
  LGPD: {
    label: { text: "Quero receber ofertas e novidades da Finclass." },
    name: "lgpd",
    type: "checkbox",
    checked: true,
  },
};
