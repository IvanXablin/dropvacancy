<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div class="regist-form">
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
    <el-button type="primary" round>Отправить</el-button>
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