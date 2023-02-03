<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div class="registration-form">
    <div class="registration-form__content">
      <p>Регистрация</p>
      <hr>
      <el-input
          v-model="input"
          placeholder="Ваше имя..."
      />
      <el-input
          v-model="input"
          placeholder="Ваша почта..."
      />
      <el-input
          v-model="input"
          type="password"
          placeholder="Пароль..."
          show-password
      />
      <el-input
          v-model="input"
          type="password"
          placeholder="Повторите пароль..."
          show-password
      />
      <el-button type="primary">Отправить</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registration-form {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 450px;
    height: 400px;
    padding: 25px;
    background: rgba(26, 97, 135, 0.3);
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>