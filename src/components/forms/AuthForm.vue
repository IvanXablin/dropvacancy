<script setup lang="ts">
import { ref } from 'vue';
import { authApi } from '@/api/Auth';
import { useRouter } from 'vue-router';
import type { TUser }  from '@/types/TUser';

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
    alert(`Произошла ошибка, попробуйте войти еще раз\n\nОшибка: ${ error.message }` );
    return;
  }
  if (response) {
    alert("Вы вошли");

    setTimeout(async () => {
      await router.push({ path: '/account' });
    }, 1000);
  }
};
</script>

<template>
  <div class="auth-form">
      <el-form>
        <el-form-item>
          <el-input
              v-model="emailInput"
              placeholder="Почта"
          />
        </el-form-item>
        <el-form-item>
          <el-input
              v-model="passwordInput"
              type="password"
              placeholder="Пароль"
              show-password
          />
        </el-form-item>
        <el-button @click="handleLogin" type="primary" round>Войти</el-button>
      </el-form>
    <el-button type="danger" round>Войти через hh.ru</el-button>
  </div>
</template>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 90%;

  .el-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
