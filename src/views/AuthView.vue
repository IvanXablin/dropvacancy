<script setup lang="ts">
import RegistForm from '@/components/forms/RegistForm.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { ref } from 'vue';

const activeTab = ref('regist');
</script>

<template>
  <div class="auth-view">
    <div class="auth-header">
      <router-link class="auth-header__logo" to="/home">
        DROPVACANCY
      </router-link>
    </div>
    <div class="auth-view__forms">
      <div class="auth-view__welcome">
        <h1>Добро пожаловать на Dropvacancy!</h1>
        <p class="auth-view__info">Персональные подборки проверенных IT-вакансий</p>
      </div>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Регистрация" name="regist">
          <regist-form/>
        </el-tab-pane>
        <el-tab-pane label="Авторизация" name="auth">
          <auth-form/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 50px;

  .auth-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 35px;
    box-shadow: 1px 1px rgba(70, 70, 70, 0.2);

    &__logo {
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
    }

    @media screen and (max-width: 810px) {
      box-shadow: none;
    }
  }

  &__welcome {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 20px;
    text-align: center;
    border-radius: 10px;
  }

  &__info {
    font-size: 17px;
    color: #cccccc;
  }

  &__forms {
    max-width: 550px;
    width: 100%;
    height: auto;
    padding: 25px;
    background-color: rgba(63, 78, 105, 0.4);
    border-radius: 20px;
  }

  @media screen and (max-width: 810px) {
    flex-direction: column;
    padding: 10px;
    gap: 30px;
  }
}
</style>