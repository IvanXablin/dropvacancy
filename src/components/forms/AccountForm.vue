<script setup lang="ts">
import { ref } from "vue";

const isSendEmail = ref(true);
</script>

<template>
  <div class="account-view">
    <div class="account-view__content">
      <p class="account-view__form">Настройки профиля</p>
      <el-form label-position="top">
        <el-form-item label="Имя пользователя">
          <el-input  />
        </el-form-item>
        <el-form-item label="Email">
          <el-input  />
        </el-form-item>
        <el-form-item label="Старый пароль">
          <el-input  />
        </el-form-item>
        <el-form-item label="Новый пароль">
          <el-input  />
        </el-form-item>
        <el-form-item label="Включить почтовую расслылку">
          <el-switch v-model="isSendEmail" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >Обновить</el-button>
          <el-button>Отмена</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account-view {
  display: flex;
  justify-content: center;
  margin: 30px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
    height: 600px;
    padding: 50px;
    background: rgba(0, 0, 0, 0.40);
    border-radius: 30px;
  }

  &__form {
    margin: 20px;
    text-align: center;
    font-size: 32px;
  }
}
</style>