<script setup lang="ts">
import { YandexClusterer, YandexMap, YandexMarker } from 'vue-yandex-maps'
import { onMounted } from 'vue';
import { useVacanciesStore } from '@/entities/vacancy/model/vacancy-store';
import VacancyBalloon from '@/entities/vacancy/ui/vacancy-balloon.vue';
import { useRoute } from 'vue-router';

const vacanciesStore = useVacanciesStore();
const route = useRoute();

const settings = {
  apiKey: '9f1bb2b3-f21c-44d6-bfe9-f8adf1f152bf',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: true,
  version: '2.1',
};

onMounted(async () => {
  if (Object.keys(route.query).length) {
    await vacanciesStore.setFilter(route.query);
    await vacanciesStore.setVacanciesMap();
  }
  else {
    await vacanciesStore.setVacancies();
  }
});
</script>

<template>
  <div class="vacancies-map">
    <template v-if="vacanciesStore.getVacancies">
      <yandex-map :settings="settings" :coordinates="[55.45, 37.37]" :zoom="7" >
        <yandex-clusterer :options="{ preset: 'islands#nightClusterIcons' }">
          <template v-for="vacancy in vacanciesStore.getVacancies">
            <template v-if="vacancy.address?.lat && vacancy.address?.lng" :key="vacancy.id">
                <yandex-marker
                    :properties="{ iconCaption: vacancy.name }"
                    :coordinates="[vacancy.address.lat, vacancy.address.lng]"
                    :marker-id="vacancy.id"
                >
                  <template #component>
                    <vacancy-balloon :vacancy="vacancy"/>
                  </template>
                </yandex-marker>
            </template>
          </template>
        </yandex-clusterer>
      </yandex-map>
    </template>
  </div>
</template>

<style lang="scss">
.yandex-container {
  width: 100%;
  height: 100vh;
}
.yandex-balloon {
  height: 200px;
  width: 200px;
}
.ymaps-2-1-79-map ymaps, .ymaps-2-1-79-map  .ymaps-2-1-79-map ymaps:after {
  border-radius: 10px;
}

</style>