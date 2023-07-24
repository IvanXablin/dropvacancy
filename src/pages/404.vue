<template>
  <div class="not-found-warning">
    <h1>404</h1>
    <router-link class="not-found-warning__link" to="/vacancies">
      Вернуться к просмотру вакансий
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found-warning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  font-size: 36px;

  &__link {
    text-align: center;
    color: #5a8dce;

    &:hover {
      color: #61a5fc;
    }
  }
}
</style>
