<script setup lang="ts">
import {ref, watch} from 'vue';
import { useVacanciesStore } from "@/store/Vacancies.store";

const options = [
  {
    value: 'Frontend',
    label: 'JS/TS Frontend',
  },
  {
    value: 'Backend',
    label: 'Backend',
  },
  {
    value: 'Java',
    label: 'Java',
  },
  {
    value: 'DevOps',
    label: 'DevOps',
  },
  {
    value: 'PHP',
    label: 'PHP',
  },
  {
    value: 'Android',
    label: 'Android',
  },
  {
    value: 'IOS',
    label: 'IOS',
  },
  {
    value: 'Python',
    label: 'Python',
  },
  {
    value: 'Ruby',
    label: 'Ruby',
  },
  {
    value: 'C',
    label: 'C/C++',
  },
  {
    value: 'Product Analyst ',
    label: 'Product Analyst ',
  },
];

const specialty = ref<string[]>([]);
const income = ref<number>();
const city = ref<string[]>([]);
const level = ref<string>();
const schedule = ref<string[]>()

const vacanciesStore = useVacanciesStore();

const handleChangeFilter = () => {
  const optionsFilter = {
    text: specialty.value.join(' '),
    schedule: schedule.value,
    salary: income.value,
    area: city.value.join(' '),
  }
  vacanciesStore.setFilter(optionsFilter)
};

watch([specialty, income, city, level, schedule], () => {
  handleChangeFilter()
});

</script>

<template>
  <div class="vacancy-filter">
    <el-scrollbar height="700px">
      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">Специализация</p>
        <el-select
            v-model="specialty"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="Выбрать"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>

      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">Уровень дохода</p>
        <el-radio-group v-model="income">
          <el-radio :label="0">Не имеет значение</el-radio>
          <el-radio :label="25000">От 25000 руб</el-radio>
          <el-radio :label="85000">От 85000 руб</el-radio>
          <el-radio :label="150000">От 150 000 руб</el-radio>
          <el-radio :label="210000">От 210 000 руб</el-radio>
          <el-radio :label="275000">От 275 000 руб</el-radio>
        </el-radio-group>
      </div>

      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">Локация</p>
        <el-checkbox-group v-model="city">
          <el-checkbox label="1" >Москва</el-checkbox>
          <el-checkbox label="4" >Новосибирск</el-checkbox>
        </el-checkbox-group>
      </div>

      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">График работы</p>
        <el-radio-group v-model="schedule">
          <el-radio :label="'remote'">Удаленая работа</el-radio>
          <el-radio :label="'fullDay'">Полный рабочий день</el-radio>
          <el-radio :label="'flexible'">Гибкий график</el-radio>
        </el-radio-group>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.vacancy-filter {
  width: 300px;
  padding: 20px;
  margin: 10px;

  &__item {
    margin: 30px;
    padding: 10px;
  }

  &__name {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
}
</style>