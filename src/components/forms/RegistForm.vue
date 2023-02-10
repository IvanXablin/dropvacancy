<script setup lang="ts">
import { ref } from 'vue';
import type { TUser }  from "@/types/TUser";
import axios from "axios";

const nameInput = ref('');
const emailInput = ref('');
const passwordInput = ref('');
const confirmPasswordInput = ref('');

const handleRegist = async ():Promise<void> => {

  if (passwordInput.value !== confirmPasswordInput.value) return;

  const user: TUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await axios.post('http://localhost:3000/auth/register', user);
    console.log(response.data)
  }
  catch (error: unknown) { /* empty */ }
};
</script>

<template>
  <div class="regist-form">
    <el-input
        v-model="nameInput"
        placeholder="Ваше имя"
    />
    <el-input
        v-model="emailInput"
        placeholder="Ваша почта"
    />
    <el-input
        v-model="passwordInput"
        type="password"
        placeholder="Пароль"
        show-password
    />
    <el-input
        v-model="confirmPasswordInput"
        type="password"
        placeholder="Повторите пароль"
        show-password
    />
    <el-button @click="handleRegist" type="primary" round>Зарегистрироваться</el-button>
  </div>
</template>

<style lang="scss" scoped>
.regist-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 90%;
}
</style>