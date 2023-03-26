<script setup lang="ts">
import VacancyList from '@/components/lists/VacancyList.vue';
import VacancyFilter from '@/components/filters/VacancyFilter.vue';
</script>

<template>
<div class="vacancy-view">
  <vacancy-filter />
  <vacancy-list />
</div>
</template>

<style lang="scss" scoped>
.vacancy-view {
  display: flex;
  justify-content: center;
  padding: 35px;
}
</style>
