<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import VacancyCard from "@/components/cards/VacancyCard.vue";
import type { TVacancy } from "@/types/TVacancy";

const vacancyArray = ref<TVacancy[]>();
const countVacancy = ref<number>(0);

async function fetchVacancyHeadhunder(text: String) {
  const vacancies = await axios.get('https://api.hh.ru/vacancies', {
    params: {
      text
    }
  });
  vacancyArray.value = vacancies.data.items;
  countVacancy.value = vacancies.data.found;
}

onMounted( async ():Promise<void> => {
  await fetchVacancyHeadhunder('Frontend AND Backend');
});
</script>

<template>
  <div class="vacancy-list">
    <p>Найдено: {{ countVacancy }} вакансий</p>
    <el-scrollbar height="700px">
      <vacancy-card
          v-for="vacancy in vacancyArray"
          :key="vacancy.name"
          :vacancy="vacancy"
      />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.vacancy-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 50px;

  p {
    margin-bottom: 10px;
    color: #bdbdbd;
  }
}
</style>