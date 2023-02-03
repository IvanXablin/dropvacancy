<template>
<div class="header">
  <p class="header__logo">dropvacancy</p>
  <div class="header__nav">
    <router-link class="header__link" to="/">Вакансии</router-link>
    <router-link class="header__link" to="/">Аналитика</router-link>
    <router-link class="header__link" to="/">О нас</router-link>
  </div>
</div>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  box-shadow: 1px 1px rgba(70, 70, 70, 0.2);

  &__logo {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__link {
    margin: 0 15px;
    font-size: 15px;
    text-decoration: none;
    color: white;
  }
}
</style>