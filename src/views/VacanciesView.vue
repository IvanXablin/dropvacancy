<script setup lang="ts">
import VacancyList from '@/components/VacancyList.vue';
import VacancyFilter from '@/components/VacancyFilter.vue';
import VacanciesPanel from "@/components/VacanciesPanel.vue";
</script>

<template>
<div class="vacancy-view">
  <vacancies-panel/>
  <div class="vacancy-view__content">
    <vacancy-filter/>
    <vacancy-list :is-favourites="false" />
  </div>
</div>
</template>

<style lang="scss" scoped>
.vacancy-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;

  &__content {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 678px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  @media screen and (max-width: 678px) {
    padding: 15px;
  }
}
</style>
