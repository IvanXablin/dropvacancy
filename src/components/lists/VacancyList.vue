<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VacancyCard from '@/components/cards/VacancyCard.vue';
import { useVacanciesStore } from "@/store/Vacancies.store";

const vacanciesStore = useVacanciesStore();
const page = ref<number>(1);

const handleLoadVacancy = ():void => {
  page.value++;
  vacanciesStore.setPage(page.value);
};

onMounted( async ():Promise<void> => {
  await vacanciesStore.setVacancies();
});
</script>

<template>
  <div class="vacancy-list">
    <el-scrollbar
        v-if="vacanciesStore.getVacancies"
        height="750px"
    >
      <div class="vacancy-list__content">
        <vacancy-card
            v-for="vacancy in vacanciesStore.getVacancies"
            :key="vacancy.id"
            :vacancy="vacancy"
        />
        <hr class="vacancy-list__line">
        <el-button size="default" type="primary" @click="handleLoadVacancy">
          Показать еще
        </el-button>
      </div>
    </el-scrollbar>
    <div
        class="vacancy-list__loader"
        v-loading="true"
        element-loading-background="#7c7c7c26"
        element-loading-text="Загрузка..."
        v-else
    >
    </div>
  </div>
</template>

<style lang="scss" >
.vacancy-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__line {
    margin: 15px 0;
    opacity: 0.1;
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 750px;
  }
}
</style>