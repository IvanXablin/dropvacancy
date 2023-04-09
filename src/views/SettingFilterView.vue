<script setup lang="ts">
import { specialtiesList } from '@/utils/SpecialtiesList';
import { ref } from 'vue'

const specialty = ref<string[]>([]);

const value1 = ref(0);

const formatTooltip = (val: number) => {
  return val * 5000
}
</script>

<template>
<div class="setting-filter">
  <div class="setting-filter__form">
    <div class="setting-filter__item">
      <h1>Какая у тебя IT-специализация?</h1>
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
    <div class="setting-filter__item">
      <h1>Какой график работы вам нужен?</h1>
      <el-radio-group>
        <el-radio :label="'remote'">Удаленая работа</el-radio>
        <el-radio :label="'fullDay'">Полный рабочий день</el-radio>
        <el-radio :label="'flexible'">Гибкий график</el-radio>
      </el-radio-group>
    </div>
    <div class="setting-filter__item">
      <h1>Какая заплата вам нужна?</h1>
      <el-slider
          v-model="value1"
          :max="100"
          :format-tooltip="formatTooltip"
          show-stops
      />
    </div>
  </div>
  <div class="setting-filter__geolocation">
    <h1>Где вы проживаете?</h1>
    <div class="setting-filter__map">
    </div>
    <el-button type="primary" round>Далее</el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.setting-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  padding: 50px;
  width: 100%;

  &__geolocation {
    display: flex;
    flex-direction: column;
    gap: 20px
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 30px
  }

  &__map {
    width: 500px;
    height: 500px;
    border-radius: 15px;
    background-image: url("@/assets/images/map-example.png");
  }
}
</style>

