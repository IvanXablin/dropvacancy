<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { authApi } from '@/shared/api/Auth.api';
import { ElNotification } from 'element-plus';
import RulesForm from '@/shared/utils/RulesForm';
import type { FormInstance } from 'element-plus';
import type { TUser }  from '@/shared/types/TUser';
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
          ElNotification({
              title: error,
              type: 'error',
              position: 'bottom-right',
          });
        })
      }

      if (response) {
        ElNotification({
            title: 'Успех! Вы вошли',
            type: 'success',
            position: 'bottom-right',
        });
        Cookies.set('ID', response.user._id);
        Cookies.set('ACCESS_TOKEN_KEY', response.accessToken, { expires: 30 });
        await router.push({ path: '/vacancies' });
      }
    }
    else {
      ElNotification({
          title: 'Заполните правильно форму!',
          type: 'error',
          position: 'bottom-right',
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
    <el-button 
      @click="handleSubmitForm(ruleFormRef)" 
      type="primary" 
      round
      @keyup.enter="handleSubmitForm(ruleFormRef)"
    >
    Зарегистрироваться
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.regist-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: auto;

  .el-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>