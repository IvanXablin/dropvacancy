<script setup lang="ts">
import RegistForm from '@/components/RegistForm.vue'
import AuthForm from '@/components/AuthForm.vue'

import { ref } from 'vue'

const activeName = ref('first');

</script>

<template>
  <div class="auth-view">
    <div class="auth-view__content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="Регистрация" name="first">
          <regist-form/>
        </el-tab-pane>
        <el-tab-pane label="Авторизация" name="second">
          <auth-form></auth-form>
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

  &__content {
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