<template>
  <div class="user" @click="selectedUser">
    <div class="user--card"></div>
    <p class="user--nickname">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class UserCard extends Vue {
  selectedUser() {
    this.$router.push("/home");
  }
}
</script>


<style lang="scss" scoped>
.user {
  text-align: center;
  word-break: break-all;
  width: 165px;
  cursor: pointer;

  &:hover &--card {
    border: 3px solid #c4c4c4;
  }

  &:hover &--nickname {
    color: #c4c4c4;
  }

  &--card {
    width: 100%;
    height: 170px;
    border-radius: 5px;
    background-color: rgb(86, 86, 129);
  }

  &--nickname {
    font-size: 18px;
    color: gray;
  }

}
</style>