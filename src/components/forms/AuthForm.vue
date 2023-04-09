<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { authApi } from '@/api/Auth.api';
import { ElMessage } from 'element-plus';
import RulesForm from '@/utils/RulesForm';
import type { TUser }  from '@/types/TUser';
import type { FormInstance } from 'element-plus';
import Cookies from "js-cookie";

const dataAuthForm = reactive<TUser>({
  email: '',
  password: '',
});

const ruleFormRef = ref<FormInstance>();
const router = useRouter();

const handleSubmitForm = async (formEl: FormInstance | undefined):Promise<void> => {

  if (!formEl) return;

  await formEl.validate(async (valid) => {
    if (valid) {
      const [error, response] = await authApi.login(dataAuthForm);

      if (error) {
        if (Array.isArray(error.message)) {
          error.message.forEach((error: string) => {
            ElMessage({
              showClose: true,
              message: error,
              type: 'error',
            });
          });
        }
        else {
          ElMessage({
            showClose: true,
            message: error.message,
            type: 'error',
          });
        }
      }

      if (response) {
        ElMessage({
          message: 'Успех! Вы вошли!',
          type: 'success',
        });
        Cookies.set('ACCESS_TOKEN_KEY', response.accessToken)
        setTimeout(async () => {
          await router.push({ path: '/vacancies' });
        }, 500);
      }
    }
    else {
      ElMessage({
        showClose: true,
        message: 'Заполните правильно форму!',
        type: 'error',
      });
    }
  });
};

</script>

<template>
  <div class="auth-form">
      <el-form
          :rules="RulesForm"
          :model="dataAuthForm"
          ref="ruleFormRef"
          :size="'large'"
      >
        <el-form-item prop="email">
          <el-input v-model="dataAuthForm.email" placeholder="Почта" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="dataAuthForm.password"
              type="password"
              placeholder="Пароль"
              show-password
          />
        </el-form-item>
        <el-form-item>
          <p class="auth-form__link">Забыли пароль?</p>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSubmitForm(ruleFormRef)" type="primary" round>Войти</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__link {
    font-size: 14px;
    color: #99c5ff;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      color: #5a8dce;
    }
  }

  .el-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
