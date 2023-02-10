<script setup lang="ts">
import { ref } from 'vue'
import axios from "axios";

const input = ref('')

function sas():void {
  const user: any = { name: 'sas', email: 'jaj123', password:'lol' }

  axios.post('http://localhost:3000/auth/register', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
</script>

<template>
  <div class="auth-form">
    <div class="auth-form__content">
     <el-input
          v-model="input"
          placeholder="Имя"
      />
      <el-input
          v-model="input"
          placeholder="Почта"
      />
      <el-input
          v-model="input"
          type="password"
          placeholder="Пароль"
          show-password
      />
      <el-button @click="sas" type="primary" round>Войти</el-button>
      <el-button type="danger" round>Войти через hh.ru</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 75%;
  }
}
</style>
