<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from 'vue'
import type { TVacancy } from "@/types/TVacancy";

const props = defineProps({
  vacancy: Object as PropType<TVacancy>,
});
</script>

<template>
  <div class="vacancy-card">
    <h3> {{ props.vacancy.name }} </h3>
    <br>
    <p>{{ props.vacancy.salary?.from }}  {{ props.vacancy.salary?.to }} {{ props.vacancy.salary?.currency }}</p>
    <br>
    <p>{{ props.vacancy.address?.city }}</p>
    <br>
    <p>{{ props.vacancy.employer?.name }}</p>
    <br>
    <el-button type="primary">Откликнуться</el-button>
  </div>
</template>

<style lang="scss">
.vacancy-card {
  width: 700px;
  height: 220px;
  padding: 20px;
  margin: 10px;
  border: 2px #224c8b solid;
  border-radius: 20px;
}
</style>