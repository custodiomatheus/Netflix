<template>
  <div class="formGrouper">
    <h1 v-if="title">{{ title }}</h1>

    <form @submit.prevent="onSubmit">
      <BaseFieldText v-for="{ name, ...attrs } in schema" :key="name" :name="name" :attrs="attrs" />

      <BaseButton text="Entrar" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseFieldText from "@/components/Base/BaseFieldText";
import { TextField, CheckboxField } from "@/types/FormType";

const props = defineProps<{
  title?: string;
  schema: Array<TextField | CheckboxField>;
}>();

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((formValues) => {
  console.log(formValues);
});
</script>

<style lang="scss">
.formGrouper {
  h1 {
    color: $white;
    margin-bottom: 28px;
  }

  form {
    display: flex;
    flex-direction: column;

    .fieldGrouper {
      margin-bottom: 16px;
    }

    button {
      margin: 16px 0;
    }
  }
}
</style>
