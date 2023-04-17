<script setup lang="ts">
import { onMounted } from 'vue';
import { useVacanciesStore } from '@/store/Vacancies.store';
import { useRouter } from 'vue-router';
import { Location, Star } from '@element-plus/icons-vue'

const vacanciesStore = useVacanciesStore();
const router = useRouter();

onMounted(async () => {
  await vacanciesStore.setCountVacancies();
})
</script>

<template>
  <div class="vacancies-panel">
    <div class="vacancies-panel__content">
      <h3>Найдено вакансий: {{ vacanciesStore.getCountVacancies }}</h3>
      <el-select placeholder="Сортировать по"/>
      <div class="vacancies-panel__buttons">
        <el-button type="primary" :icon="Location" @click="router.push({ path: '/map', query: vacanciesStore.getSettingsFilter })">Показать на карте</el-button>
        <el-button type="primary" :icon="Star">Показать избранное</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vacancies-panel {
  display: flex;
  justify-content: center;
  width: 100%;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 50px;
    background-color: rgba(53, 76, 107, 0.10);
    border-radius: 10px;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>