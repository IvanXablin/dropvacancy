<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import VacancyCard from "@/components/cards/VacancyCard.vue";
import type { TVacancy } from "@/types/TVacancy";

const arrayHH = ref<TVacancy[]>();
const arrayZP = ref<TVacancy[]>();

async function fetchVacancyHeadhunder(text: String) {
  const vacancy = await axios.get('https://api.hh.ru/vacancies', {
    params: {
      text
    }
  });
  arrayHH.value = vacancy.data.items;
}

async function fetchVacancyZarplata(text: String) {
  const vacancy = await axios.get('https://api.zarplata.ru/vacancies', {
    params: {
      text
    }
  });
  arrayZP.value = vacancy.data;
}

onMounted( async ():Promise<void> => {
  await fetchVacancyHeadhunder('Frontend');
  await fetchVacancyZarplata('Backend');
});

</script>

<template>
<div class="vacancy-view">
  <div class="vacancy-filter">
    <p>Сферы</p>
    <br>
    <el-button type="primary">Выбрать</el-button>
    <br>
    <br>
    <p>Зарплата, ₽/мес на руки</p>
    <br/>
    <el-radio-group>
      <el-radio :label="1">До 100К</el-radio>
      <el-radio :label="2">От 150К</el-radio>
      <el-radio :label="3">От 350К</el-radio>
    </el-radio-group>
    <br/>
    <br/>
    <p>Локация</p>
    <br/>
    <el-checkbox-group>
      <el-checkbox label="Москва" />
      <el-checkbox label="Санкт-Петербург" />
      <el-checkbox label="Новосибирск" />
    </el-checkbox-group>
    <br/>
    <br/>
    <p>Уровень навыков</p>
    <br/>
    <el-checkbox-group>
      <el-checkbox label="Junior" />
      <el-checkbox label="Middle" />
      <el-checkbox label="Senior" />
      <el-checkbox label="Teamlead / Manager" />
    </el-checkbox-group>
    <br/>
    <br/>
    <p>Период размещения</p>
    <br/>
    <el-radio-group>
      <el-radio :label="1">За все время</el-radio>
      <el-radio :label="2">За месяц</el-radio>
      <el-radio :label="3">За неделю</el-radio>
      <el-radio :label="4">За последние три дня</el-radio>
      <el-radio :label="5">За сутки</el-radio>
    </el-radio-group>
  </div>
  <div class="vacancy-list">
    <el-scrollbar height="700px">
      <vacancy-card
          v-for="vacancy in arrayHH"
          :key="vacancy.name"
          :vacancy="vacancy"
      />
    </el-scrollbar>
  </div>
</div>
</template>

<style lang="scss" scoped>
.vacancy-view {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.vacancy-filter {
  width: 300px;
  padding: 20px;
  margin: 10px;
}

.vacancy-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
</style>
