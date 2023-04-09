<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { authApi } from '@/api/Auth.api';
import { ElMessage } from 'element-plus';
import RulesForm from '@/utils/RulesForm';
import type { FormInstance } from 'element-plus';
import type { TUser }  from '@/types/TUser';
import Cookies from 'js-cookie';

const dataRegistForm = reactive<TUser>({
  name: '',
  email: '',
  password: '',
});

const confirmPasswordInput = ref('');
const ruleFormRef = ref<FormInstance>();
const router = useRouter();

const handleSubmitForm = async (formEl: FormInstance | undefined):Promise<void> => {

  if (!formEl) return;

  await formEl.validate(async (valid) => {
    if (valid) {

      const [error, response] = await authApi.register(dataRegistForm);

      if (error) {
        error.message.forEach((error: string) => {
          ElMessage({
            showClose: true,
            message: error,
            type: 'error',
          });
        })
      }

      if (response) {
        ElMessage({
          message: 'Успех! Вы вошли!',
          type: 'success',
        });
        Cookies.set('ACCESS_TOKEN_KEY', response.accessToken)
        setTimeout(async () => {
          await router.push({ path: '/vacancies' });
        }, 1000);
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
}
</script>

<template>
  <div class="regist-form">
    <el-form
        :rules="RulesForm"
        :model="dataRegistForm"
        ref="ruleFormRef"
    >
      <el-form-item prop="name">
        <el-input v-model="dataRegistForm.name" placeholder="Ваше имя" />
      </el-form-item>
      <el-form-item prop="email">
        <el-input
            v-model="dataRegistForm.email" placeholder="Ваша почта" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            v-model="dataRegistForm.password"
            type="password"
            placeholder="Пароль"
            show-password
        />
      </el-form-item>
      <el-form-item>
        <el-input
            v-model="confirmPasswordInput"
            type="password"
            placeholder="Повторите пароль"
            show-password
        />
      </el-form-item>
    </el-form>
    <el-button @click="handleSubmitForm(ruleFormRef)" type="primary" round>Зарегистрироваться</el-button>
  </div>
</template>

<style lang="scss" scoped>
.regist-form {
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