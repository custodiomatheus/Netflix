import { defineRule } from "vee-validate";
import { alpha_spaces } from "@vee-validate/rules";

const MIN_NUMBERS_LENGTH_PHONE = 10;

defineRule("alpha_spaces", alpha_spaces);

defineRule("required", (value: string): string | boolean => {
  if (!value || !value.length) {
    return "Este campo é obrigatório";
  }

  return true;
});
defineRule("email", (value: string): string | boolean => {
  if (!value || !value.length) {
    return true;
  }

  if (!/(^[^@][a-z0-9-_.]+)(@{1})([a-z0-9-_]+[^@])(\.{1})([a-z0-9]+[^@])/i.test(value)) {
    return "Este campo deve possuir um e-mail válido (ex: xxx@xxx.com)";
  }

  return true;
});

defineRule("min", (value: string, [limit]: [number]): string | boolean => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < limit) {
    return `O campo deve ter, ao menos, ${limit} caracteres`;
  }

  return true;
});

defineRule("max", (value: string, [limit]: [number]): string | boolean => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length > limit) {
    return `O campo deve ter, no máximo, ${limit} caracteres`;
  }

  return true;
});

defineRule("fullname", (value: string): string | boolean => {
  if (!value || !value.length) {
    return true;
  }

  if (!/([A-zÀ-ú]{2})+\s([A-zÀ-ú]{1})+/g.test(value)) {
    return "Insira o nome completo, com sobrenome";
  }

  return true;
});

defineRule("phone", (value: string): string | boolean => {
  if (!value || !value.length) {
    return true;
  }

  const onlyPhoneNumbers = value.replace(/\D/g, "");
  if (onlyPhoneNumbers.length < MIN_NUMBERS_LENGTH_PHONE) {
    return `O campo deve ter, ao menos, ${MIN_NUMBERS_LENGTH_PHONE} caracteres`;
  }

  return true;
});
