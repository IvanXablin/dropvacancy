<script setup lang="ts">
import { ref } from 'vue';

const options = [
  {
    value: 'Frontend',
    label: 'Frontend',
  },
  {
    value: 'Backend',
    label: 'Backend',
  },
  {
    value: 'Java',
    label: 'Java',
  },
];

const specialty = ref<string[]>([]);
const income = ref<number>();
const city = ref<string>();
const level = ref<string>();
const job = ref<string[]>()

function onSubmit() {
  console.log(specialty.value)
  console.log(income.value)
  console.log(city.value)
  console.log(level.value)
  console.log(job.value)
}
</script>

<template>
  <div class="vacancy-filter">
    <el-scrollbar height="700px">
      <div class="vacancy-filter__item">
        <p>Специализация</p>
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
        <p>Уровень дохода</p>
        <el-radio-group v-model="income">
          <el-radio :label="0">Не имеет значение</el-radio>
          <el-radio :label="25000">От 25000</el-radio>
          <el-radio :label="85000">От 85000</el-radio>
          <el-radio :label="150000">От 150 000</el-radio>
          <el-radio :label="210000">От 210 000 </el-radio>
          <el-radio :label="275000">От 275 000 </el-radio>
        </el-radio-group>
      </div>

      <div class="vacancy-filter__item">
        <p>Локация</p>
        <el-checkbox-group v-model="city">
          <el-checkbox label="Москва" />
          <el-checkbox label="Санкт-Петербург" />
          <el-checkbox label="Новосибирск" />
        </el-checkbox-group>
      </div>

      <div class="vacancy-filter__item">
        <p>Уровень навыков</p>
        <el-checkbox-group v-model="level">
          <el-checkbox label="Junior" />
          <el-checkbox label="Middle" />
          <el-checkbox label="Senior" />
          <el-checkbox label="Teamlead / Manager" />
        </el-checkbox-group>
      </div>

      <div class="vacancy-filter__item">
        <p>График работы</p>
        <el-radio-group v-model="job">
          <el-radio :label="'remote'">Удаленая работа</el-radio>
          <el-radio :label="'fullDay'">Полный рабочий день</el-radio>
          <el-radio :label="'flexible'">Гибкий график</el-radio>
        </el-radio-group>
      </div>
      <el-button @click="onSubmit" >Sas</el-button>
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

    p {
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
}
</style>