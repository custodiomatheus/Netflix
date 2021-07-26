<template>
  <div class="row">
    <p class="row__title">Em Alta</p>
    <ul class="row__list">
      <li class="row__item"></li>
      <li class="row__item"></li>
      <li class="row__item"></li>
      <li class="row__item"></li>
      <li class="row__item"></li>
      <li class="row__item"></li>
      <li class="row__item"></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  max-width: 100%;
  overflow-x: scroll;
  background-color: blue;
  margin-bottom: 50px;
}

.row__title {
  font-size: 20px;
  color: var(--white);
  font-weight: bold;
  margin-bottom: 15px;
}

.row__list {
  list-style: none;
  display: flex;
}

.row__item {
  min-width: 235px;
  height: 105px;
  background-color: var(--gray);
  border: none;
  border-radius: 4px;

  &:not(:first-child) {
    margin-left: 5px;
  }
}
</style>