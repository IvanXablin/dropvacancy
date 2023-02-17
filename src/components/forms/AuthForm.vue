<script setup lang="ts">
import { ref } from 'vue';
import { authApi } from "@/api/auth.api";
import { useRouter } from "vue-router";
import type { TUser }  from "@/types/TUser";

const nameInput = ref('');
const emailInput = ref('');
const passwordInput= ref('');

const router = useRouter();

const handleLogin = async ():Promise<void> => {

  const user:TUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  const [error, response] = await authApi.login(user);

  if (error) {
    alert("Произошла ошибка, попробуйте войти еще раз");
    return;
  }
  if (response) {
    await router.push({ path: '/account' })
  }
}

</script>

<template>
  <div class="auth-form">
    <div class="auth-form__content">
     <el-input
          v-model="nameInput"
          placeholder="Имя"
      />
      <el-input
          v-model="emailInput"
          placeholder="Почта"
      />
      <el-input
          v-model="passwordInput"
          type="password"
          placeholder="Пароль"
          show-password
      />
      <el-button @click="handleLogin" type="primary" round>Войти</el-button>
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
