<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import VacancyCard from '@/components/cards/VacancyCard.vue';
import type { TVacancy } from '@/types/TVacancy';

const vacancyArray = ref<TVacancy[]>([]);
const countVacancy = ref<number>(0);
const page = ref<number>(1)

async function fetchVacancyHeadhunder(text: string, page: number):Promise<void> {
  const token = "H2FLFLECUNS7S4MPJF2ASV6NM1TBN0EN0CGQNUK3ANM8J1OFTMN1IACD3QGGE1C8"

  const vacancies = await axios.get('https://api.hh.ru/vacancies', {
    params: {
      text,
      page
    },
    headers: {
     'Authorization':  'Bearer ' + token
    }
  })
  vacancies.data.items.forEach((v: any) => vacancyArray.value.push(v))
  countVacancy.value = vacancies.data.found;
}

const load = () => {
  setTimeout(async () => {
    page.value += 1;
    await fetchVacancyHeadhunder('Frontend', page.value)
  }, 2000)
}

onMounted( async ():Promise<void> => {
  await fetchVacancyHeadhunder('Frontend', page.value);
});
</script>

<template>
  <div class="vacancy-list">
    <p>Найдено: {{ countVacancy }} вакансий</p>
    <el-scrollbar height="750px">
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
  padding: 10px;

  p {
    margin: 10px;
    color: #bdbdbd;
  }

  .sas {
    margin: 35px;
  }
}
</style>