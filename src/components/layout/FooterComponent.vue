<template>
<div class="footer">
  <p class="footer__warning">© Dropvacancy 2023. Все права защищены</p>
  <a target="_blank" href="https://github.com/IvanXablin/dropvacancy-client">
    <img class="footer__logo" src="../../assets/images/github-mark-white.svg" alt="" />
  </a>
</div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 35px;
  box-shadow: 1px 1px 1px 1px rgba(127, 118, 118, 0.8);

  &__warning {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.76);
  }

  &__logo {
    width: 27px;
  }
}
</style>