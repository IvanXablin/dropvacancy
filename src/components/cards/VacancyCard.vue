<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue'
import type { TVacancy } from '@/types/TVacancy';
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  vacancy: Object as PropType<TVacancy>,
});
</script>

<template>
  <div class="vacancy-card">
    <h2 class="vacancy-card__name">
      <a :href="props.vacancy?.alternate_url"> {{ props.vacancy?.name }} </a>
    </h2>
    <p class="vacancy-card__info">
      {{ props.vacancy?.salary?.from }}
      {{ props.vacancy?.salary?.to }}
      {{ props.vacancy?.salary?.currency }}
    </p>
    <p class="vacancy-card__info">{{ props.vacancy?.address?.city }}</p>
    <p class="vacancy-card__info">{{ props.vacancy?.employer?.name }}</p>
    <el-button
        @click="router.push({ path: `/vacancy/${props.vacancy?.id}` })"
        type="primary"
    >
      Подробнее
    </el-button>
  </div>
</template>

<style lang="scss">
.vacancy-card {
  max-width: 620px;
  padding: 20px;
  margin: 20px;
  background-image: linear-gradient(to left bottom, #04204a, #0a2348, #112645, #182942, #1e2c3f);
  border: 1px rgba(255, 255, 255, 0.15) solid;
  border-radius: 10px;

  &__info {
    margin-bottom: 20px;
    color: #bebebe;
  }

  &__name {
    margin-bottom: 25px;
    font-weight: bolder;
  }
}
</style>