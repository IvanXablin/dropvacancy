<script setup lang="ts">
import {defineProps, ref, watch} from 'vue';
import { useVacanciesStore } from '@/entities/vacancy/model/vacancy-store';
import { specialtiesList } from '@/shared/constants/SpecialtiesList';

const props = defineProps({
    isDrawer: Boolean,
});

const specialty = ref<string[]>([]);
const income = ref<number>();
const city = ref<string>();
const level = ref<string>();
const schedule = ref<string[]>();

const vacanciesStore = useVacanciesStore();

const handleChangeFilter = (): void => {
  const optionsFilter = {
    text: specialty?.value.join(' OR '),
    schedule: schedule?.value,
    salary: income?.value,
    area: city?.value,
  }
  vacanciesStore.setFilter(optionsFilter);
};

watch([specialty, income, city, level, schedule], () => {
  handleChangeFilter();
});
</script>

<template>
  <div :class="isDrawer ? 'vacancy-filter-draw' : 'vacancy-filter'">
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
              v-for="specialty in specialtiesList"
              :key="specialty.value"
              :label="specialty.label"
              :value="specialty.value"
          />
        </el-select>
      </div>

      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">Уровень дохода</p>
        <el-radio-group v-model="income">
          <el-radio :label="25000">От 25000 руб</el-radio>
          <el-radio :label="85000">От 85000 руб</el-radio>
          <el-radio :label="150000">От 150 000 руб</el-radio>
          <el-radio :label="210000">От 210 000 руб</el-radio>
          <el-radio :label="275000">От 275 000 руб</el-radio>
        </el-radio-group>
      </div>

      <div class="vacancy-filter__item">
        <p class="vacancy-filter__name">Локация</p>
        <el-radio-group v-model="city">
          <el-radio :label="1">Москва</el-radio>
          <el-radio :label="4">Новосибирск</el-radio>
        </el-radio-group>
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
    margin: 10px;
    padding: 10px;
  }

  &__name {
    font-size: 21px;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 678px) {
    display: none;
  }
}

.vacancy-filter-draw {
  width: 300px;
  padding: 20px;
  margin: 10px;

  .vacancy-filter__item {
    margin: 10px;
    padding: 10px;
  }

  .vacancy-filter__name {
    font-size: 21px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
}
</style>