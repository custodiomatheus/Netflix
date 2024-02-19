<template>
  <div class="formGrouper">
    <h1 v-if="title">{{ title }}</h1>

    <form @submit.prevent="onSubmit">
      <BaseFieldText v-for="{ name, ...attrs } in schema" :key="name" :name="name" :attrs="attrs" />

      <BaseButton :text="buttonText" :loading="isSubmitting" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import BaseButton from "@/components/Base/BaseButton";
import BaseFieldText from "@/components/Base/BaseFieldText";
import { TextField, CheckboxField } from "@/types/FormType";

const props = defineProps<{
  title?: string;
  buttonText: string;
  submit: (formValues: any) => void;
  schema: Array<TextField | CheckboxField>;
}>();

const { handleSubmit, isSubmitting } = useForm();

const onSubmit = handleSubmit((formValues) => props.submit(formValues));
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
