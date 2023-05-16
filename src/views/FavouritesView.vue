<script setup lang="ts">
import VacancyList from '@/components/VacancyList.vue';
</script>

<template>
  <div class="favourites-view">
    <div class="favourites-view__content">
      <h1>Избранные вакансии</h1>
      <vacancy-list :is-favourites="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.favourites-view {
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
  }
}
</style>