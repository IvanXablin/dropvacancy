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
      <p>Персональные подборки проверенных IT-вакансий</p>
      <p>Пройдите регистрацию и настройте фильтр по себя</p>
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
  gap: 50px;

  &__welcome {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;

    p {
      font-size: 17px;
      color: #afaeae;
    }
  }

  &__forms {
    width: 550px;
    height: 450px;
    padding: 40px;
    background: rgba(26, 97, 135, 0.3);
    border-radius: 20px;
  }
}
</style>