<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { specialtiesList } from "@/utils/SpecialtiesList";
import { vacanciesApi } from "@/api/Vacancies.api";
import {onMounted, ref} from "vue";
import VacancyFilter from "@/components/filters/VacancyFilter.vue";

const countVacancies = ref<any[]>([2000, 602, 703, 4343, 5455, 4600, 2121, 3000, 100, 6234, 210])

const data = ref<any>({
  labels: specialtiesList.map((s: any) => s.label),
  datasets: [
    {
      label: 'Самая популярная специализация',
      backgroundColor: '#007eff',
      data: countVacancies.value
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

onMounted(async () => {
  const params = {
    text: 'Frontend'
  }
  const [error, response] = await vacanciesApi.getVacancies(params);
  countVacancies.value = [response.found]
})
</script>

<template>
  <div class="home-view">
    <div class="home-view__content">
      <vacancy-filter/>
      <div style="width: 800px">
        <Bar :data="data" :options="options" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  justify-content: center;
  padding: 50px;
  min-width: 100%;

  &__content {
    display: flex;
    justify-content: center;
  }
}
</style>
