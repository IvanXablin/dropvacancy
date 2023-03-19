<script setup lang="ts">
import RegistForm from '@/components/forms/RegistForm.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { ref } from 'vue';

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
  min-height: 100%;

  &__content {
    width: 550px;
    height: 450px;
    padding: 40px;
    background: rgba(26, 97, 135, 0.3);
    border-radius: 20px;
  }
}
</style>