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

const countVacancies = ref<any[]>([])


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
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  justify-content: center;
  padding: 50px;

  &__content {
    width: 80%;
  }
}
</style>
