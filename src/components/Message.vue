<template>
  <div class="message" :style="{'background-color': color}">
    <span>
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    message: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true
    }
  },
})
export default class Message extends Vue {}
</script>

<style lang="scss" scoped>
.message {
  width: 300px;
  background-color: var(--orange);
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;

  & > span {
    font-size: 14px;
  }
}
</style>