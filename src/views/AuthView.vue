<script setup lang="ts">
import RegistForm from '@/components/forms/RegistForm.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { ref } from 'vue';

const activeTab = ref('regist');
</script>

<template>
  <div class="auth-view">
    <div class="auth-view__welcome">
      <h1>Добро пожаловать на Dropvacancy!</h1>
      <p class="auth-view__info">Персональные подборки проверенных IT-вакансий</p>
      <p class="auth-view__info">Пройдите регистрацию и настройте фильтр по себя</p>
    </div>
    <div class="auth-view__forms">
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  gap: 50px;

  &__welcome {
    display: flex;
    flex-direction: column;
    gap: 30px;
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
    gap: 30px;
  }
}
</style>