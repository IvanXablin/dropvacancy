<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

const arrayHH = ref<unknown>();
const arrayZP = ref<unknown>();
async function fetchVacancyHeadhunder(text: String) {
  const vacancy = await axios.get('https://api.hh.ru/vacancies/', {
    params: {
      text
    }
  });
  arrayHH.value = vacancy.data;
}

async function fetchVacancyZarplata(text: String) {
  const vacancy = await axios.get('https://api.zarplata.ru/vacancies/', {
    params: {
      text
    }
  });
  arrayZP.value = vacancy.data;
}

onMounted( ():void => {
  fetchVacancyHeadhunder('Frontend');
  fetchVacancyZarplata('Backend');
});

</script>

<template>
<div class="vacancy-list">
  <div class="vacancy-card" v-for="v in arrayHH?.items" :key="v.id">
    <h3> {{ v.name }} </h3>
    <br>
    <p>{{ v?.salary?.from }}  {{ v?.salary?.to }} {{ v?.salary?.currency }}</p>
    <br>
    <p>{{ v?.address?.city }}</p>
  </div>

  <div class="vacancy-card" v-for="v in arrayZP?.items" :key="v.id">
    <h3> {{ v.name }} </h3>
    <br>
    <p>{{ v?.salary?.from }}  {{ v?.salary?.to }} {{ v?.salary?.currency }}</p>
    <br>
    <p>{{ v?.address?.city }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.vacancy-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vacancy-card {
  width: 500px;
  height: 150px;
  padding: 15px;
  margin: 10px;
  border: 2px #224c8b solid;
  border-radius: 20px;
}
</style>
