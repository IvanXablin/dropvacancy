<template>
  <div class="map">
    <YandexMap :settings="settings" :coordinates="[55.040998, 82.917447]" >
      <YandexMarker :coordinates="[55.040998, 82.917447]" :marker-id="1">
        <template #component>
          <p>Frontend developer</p>
        </template>
      </YandexMarker>
      <YandexMarker :coordinates="[55.140998, 83.917447]" :marker-id="1">
        <template #component>
          <p>Backend developer</p>
        </template>
      </YandexMarker>
    </YandexMap>
  </div>
</template>

<script setup lang="ts">
import { YandexMap } from 'vue-yandex-maps'

const settings = {
  apiKey: '9f1bb2b3-f21c-44d6-bfe9-f8adf1f152bf',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: true,
  version: '2.1'
}
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
</style>