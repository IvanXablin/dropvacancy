<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue'
import type { TVacancy } from '@/types/TVacancy';
import {useRouter} from "vue-router";

const props = defineProps({
  vacancy: Object as PropType<TVacancy>,
});

const router = useRouter();
</script>

<template>
  <div class="vacancy-balloon">
    <a :href="props.vacancy?.alternate_url" target="_blank">
      <p class="vacancy-balloon__name">{{ props.vacancy?.name }}</p>
    </a>
    <p class="vacancy-balloon__info">{{ props.vacancy?.employer.name }}</p>
    <p class="vacancy-balloon__info">{{ props.vacancy?.address.city }}</p>
    <p class="vacancy-balloon__info">
      {{ props.vacancy?.salary.from }} - {{ props.vacancy?.salary.to }} {{ props.vacancy?.salary.currency }}
    </p>
    <el-button
        @click="router.push({ path: `/vacancy/${props.vacancy?.id}` })"
        type="primary"
    >
      Подробнее
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.vacancy-balloon {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__name {
    font-weight: bold;
  }

  &__info {
    color: #04193d;
  }
}
</style>