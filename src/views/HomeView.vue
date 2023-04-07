<script setup lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps'

const settings = {
  apiKey: 'fbcadb26-fd55-4acd-ab71-0d7902b72b4a',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: true,
  version: '2.1'
};
</script>

<template>
  <div class="home-view">
    <YandexMap :settings="settings" :coordinates="[32, 50]">
      <!--Markers-->
    </YandexMap>
  </div>
</template>

<style lang="scss" scoped>

</style>