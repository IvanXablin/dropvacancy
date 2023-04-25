<template>
  <div class="map">
    <template v-if="vacanciesStore.getVacancies">
      <YandexMap :settings="settings" :coordinates="[55.040998, 82.917447]" >
        <YandexClusterer :options="{ preset: 'islands#nightClusterIcons' }">
        <template v-for="vacancy in vacanciesStore.getVacancies">
          <template v-if="vacancy.address?.lat && vacancy.address?.lng" :key="vacancy.id">

              <YandexMarker
                  :properties="{ iconCaption: vacancy.name }"
                  :coordinates="[vacancy.address.lat, vacancy.address.lng]"
                  :marker-id="vacancy.id"
              >
                <template #component>
                  <VacancyBalloon :vacancy="vacancy"/>
                </template>
              </YandexMarker>
          </template>
        </template>
        </YandexClusterer>
      </YandexMap>
    </template>
  </div>
</template>

<script setup lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import { onMounted } from "vue";
import { useVacanciesStore } from '@/store/Vacancies.store';
import VacancyBalloon from "@/components/cards/VacancyBalloon.vue";
import { useRoute } from "vue-router";

const settings = {
  apiKey: '9f1bb2b3-f21c-44d6-bfe9-f8adf1f152bf',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: true,
  version: '2.1'
};
const vacanciesStore = useVacanciesStore();
const route = useRoute();

onMounted(async () => {
  await vacanciesStore.setFilter(route.query);
})
</script>

<style>
.yandex-container {
  width: 100%;
  height: 100vh;
}
.yandex-balloon {
  height: 200px;
  width: 200px;
}

p {
  font-size: 17px;
}
</style>