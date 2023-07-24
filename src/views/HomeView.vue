<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'
import { specialtiesList } from "@/shared/utils/SpecialtiesList";
import { companiesList } from "@/shared/utils/CompaniesList";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const countVacancies = ref<any[]>([])
const countCompanyVacancies = ref<number[]>([])
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    let temp: number[] = [];

    for (let company of companiesList) {
        const res = await axios.get(company.url);
        temp.push(res.data?.open_vacancies);
    }
    countCompanyVacancies.value = [...temp]

    temp = []

    for (let spec of specialtiesList) {
        const res = await axios.get(spec.url);
        temp.push(res.data?.found);
    }
    countVacancies.value = [...temp]
    isLoading.value = false
});

const specialtiesData = computed<any>(() => ({
  labels: specialtiesList.map((s: any) => s.label),
  datasets: [
    {
      backgroundColor: specialtiesList.map((s: any) => s.color),
      data: countVacancies.value
    }
  ]
}));

const companyData = computed<any>(() => ({
    labels: companiesList.map((s: any) => s.label),
    datasets: [
        {
            backgroundColor: companiesList.map((s: any) => s.color),
            data: countCompanyVacancies.value
        }
    ]
}));

const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
};

const optionsPie = {
    responsive: true,
    maintainAspectRatio: false
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
</script>

<template>
  <div class="home-view">
   <div
     v-if="isLoading"
     class="loader"
     v-loading="isLoading"
     element-loading-background="#7c7c7c26"
   >
  </div>
    <div v-else class="home-view__content">
      <div class="bars">
          <h3>Самая популярная специализация на сегодняшний день</h3>
          <div class="bar">
              <Bar :data="specialtiesData" :options="optionsBar" />
          </div>
          <h3>Количество открытых вакансий у популярных IT компаний в России</h3>
          <div class="bar">
              <Pie :data="companyData" :options="optionsPie" />
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  justify-content: center;
  padding: 15px;

  &__content {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: calc(100vh - 24px);
  }

  .bars {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 50px;
    width: 100%;
  }

  .bar {
    width: 100%;
    height: 430px;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>
