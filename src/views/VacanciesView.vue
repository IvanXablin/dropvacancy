<script setup lang="ts">
import { ref } from 'vue';
import VacancyList from '@/components/lists/VacancyList.vue';
import VacancyFilter from '@/components/filters/VacancyFilter.vue';

const optionsFilterVacancy = ref<any>([]);
const onChangeFilter = (optionsFilter: any) => {
   optionsFilterVacancy.value = optionsFilter;
};
</script>

<template>
<div class="vacancy-view">
  <vacancy-filter @onFilter="onChangeFilter" />
  <vacancy-list/>
</div>
</template>

<style lang="scss" scoped>
.vacancy-view {
  display: flex;
  justify-content: center;
  padding: 35px;
}
</style>
