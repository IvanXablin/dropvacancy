<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue'
import type { TVacancy } from '@/types/TVacancy';
import { useRouter } from "vue-router";

const props = defineProps({
  vacancy: Object as PropType<TVacancy>,
});

const router = useRouter();
const handleRedirectToAboutVacancy = ():void => {
  router.push({ path: `/vacancy/${props.vacancy?.id}` });
};
</script>

<template>
  <div class="vacancy-balloon">
    <a :href="props.vacancy?.alternate_url" target="_blank">
      <p class="vacancy-balloon__name">
        {{ props.vacancy?.name }}
      </p>
    </a>
    <p class="vacancy-balloon__info">
      {{ props.vacancy?.employer.name }}
    </p>
    <p v-if="props.vacancy?.address?.city" class="vacancy-balloon__info">
      Локация: {{ props.vacancy?.address.city }}
    </p>
    <p class="vacancy-balloon__info">
      {{ props.vacancy?.salary?.from }} - {{ props.vacancy?.salary?.to }} {{ props.vacancy?.salary?.currency }}
    </p>
    <el-button
        @click="handleRedirectToAboutVacancy"
        type="primary"
        round
    >
      Подробнее
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.vacancy-balloon {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  &__name {
    font-size: 17px;
    font-weight: bold;
  }

  &__info {
    font-size: 14px;
  }
}
</style>