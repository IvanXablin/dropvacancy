<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useVacanciesStore } from '@/store/Vacancies.store';
import { useRouter } from 'vue-router';
import { Location, Star, Expand } from '@element-plus/icons-vue'
import { optionsOrderBy } from '@/utils/OptionsOrderBy';
import VacancyFilter from '@/components/VacancyFilter.vue';

const vacanciesStore = useVacanciesStore();
const router = useRouter();
const optionOrderBy = ref('');
const drawer = ref(false)

onMounted(async () => {
  await vacanciesStore.setCountVacancies();
});

const handleRedirectToMap = (): void => {
  router.push({ path: '/map', query: vacanciesStore.getSettingsFilter });
};

const handleRedirectToFavourites = (): void => {
  router.push({ path: '/favourites' });
};

const handleVacanciesOrderBy = (): void => {
  vacanciesStore.setOrderBy(optionOrderBy.value);
};
</script>

<template>
  <div class="vacancies-panel">
    <div class="vacancies-panel__content">
      <h3>Найдено вакансий: {{ vacanciesStore.getCountVacancies }}</h3>
      <el-select
          v-model="optionOrderBy"
          placeholder="Сортировать по"
          @change="handleVacanciesOrderBy"
      >
        <el-option
            v-for="options in optionsOrderBy"
            :key="options.name"
            :label="options.name"
            :value="options.id"
        />
      </el-select>
      <div class="vacancies-panel__buttons">
        <el-button type="primary" :icon="Location" @click="handleRedirectToMap">
          Показать на карте
        </el-button>
        <el-button type="primary" :icon="Star" @click="handleRedirectToFavourites">
          Показать избранное
        </el-button>
        <el-button type="primary" :icon="Expand" @click="drawer = true">
          Показать фильтр
        </el-button>
      </div>
      <el-drawer
          v-model="drawer"
          title="Фильтр"
          :direction="'ttb'"
          :size="'100%'"
      >
        <vacancy-filter :is-drawer="true" />
      </el-drawer>
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
    gap: 15px;
    padding: 20px 50px;
    background-color: rgba(53, 76, 107, 0.10);
    border-radius: 10px;

    @media screen and (max-width: 510px) {
      margin: 10px;
      padding: 20px 10px;
      justify-content: center;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 510px) {
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>