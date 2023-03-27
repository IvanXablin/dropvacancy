<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import VacancyCard from '@/components/cards/VacancyCard.vue';
import type { TVacancy } from '@/types/TVacancy';
import { vacanciesApi } from "@/api/Vacancies.api";
import {useVacanciesStore} from "@/store/Vacancies.store";

const vacancyArray = ref<TVacancy[]>([]);
const countVacancy = ref<number>(0);
const page = ref<number>(1)

const vacanciesStore = useVacanciesStore();

async function fetchVacancy (page: number):Promise<void> {

  const params = {
    text: 'Backend',
    page: page,
  }
  const [error, response] = await vacanciesApi.getVacancies(params);

 response.items.forEach((vacancy: any) => vacancyArray.value.push(vacancy));
  console.log(vacanciesStore.getVacancies)
  countVacancy.value = response.found;
}

function lol() {
  page.value += 1;
  vacanciesStore.setPage(page.value)
}

const load = () => {
  setTimeout(async () => {
    page.value += 1;
   // await fetchVacancy(page.value)
  }, 2000)
}

onMounted( async ():Promise<void> => {
  //await fetchVacancy(page.value);
  await vacanciesStore.setVacancies()
});
</script>

<template>
  <div class="vacancy-list">
    <el-scrollbar height="750px">
      <template v-if="vacanciesStore.getVacancies">
        <vacancy-card
            v-for="vacancy in vacanciesStore.getVacancies"
            :key="vacancy.name"
            :vacancy="vacancy"
        />
      </template>
      <el-empty v-else :image-size="200" />
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