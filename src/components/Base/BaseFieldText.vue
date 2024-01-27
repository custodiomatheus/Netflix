<template>
  <div class="fieldGrouper">
    <input
      v-model="value"
      :placeholder="attrs.placeholder"
      :type="attrs.type"
      :maxlength="attrs.maxlength"
      :class="errorMessage && 'error'"
    />

    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { TextField, CheckboxField } from "@/types/FormType";

const props = defineProps<{
  name: string;
  attrs: TextField;
}>();

const { value, errorMessage } = useField(() => props.name, props.attrs.rules);
</script>

<style lang="scss" scoped>
.fieldGrouper {
  input {
    width: 100%;
    background: $gray-900;
    border: none;
    border-radius: $border-radius;
    height: 58px;
    padding: 0 20px 0;
    font-size: 1rem;
    color: $white;
    margin-bottom: 4px;

    &.error {
      border-bottom: 1px solid $orange-900;
    }

    &:focus {
      background-color: $gray-800;
    }

    &::placeholder {
      font-size: 1rem;
      color: $gray-700;
    }
  }

  span {
    color: $orange-900;
    font-size: 1rem;
  }
}
</style>
