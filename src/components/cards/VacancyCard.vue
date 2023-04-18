<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { PropType } from 'vue'
import type { TVacancy } from '@/types/TVacancy';
import { useRouter } from 'vue-router';
import {  Star } from '@element-plus/icons-vue'

const router = useRouter();

const props = defineProps({
  vacancy: Object as PropType<TVacancy>,
});

const publishedAt = ref(new Date(props.vacancy!.published_at));
</script>

<template>
  <div class="vacancy-card">
    <h2 class="vacancy-card__name">
      <a :href="props.vacancy?.alternate_url">
        {{ props.vacancy?.name }}
      </a>
    </h2>
    <p class="vacancy-card__info">
      {{ props.vacancy?.salary?.from }} - {{ props.vacancy?.salary?.to }} {{ props.vacancy?.salary?.currency }}
    </p>

    <p class="vacancy-card__info">{{ props.vacancy?.address?.city }}</p>
    <p class="vacancy-card__info">{{ props.vacancy?.employer?.name }}</p>

    <div class="vacancy-card__footer">
      <div class="vacancy-card__group">
        <el-button
            @click="router.push({ path: `/vacancy/${props.vacancy?.id}` })"
            type="primary"
        >
          Подробнее
        </el-button>
        <el-button
            type="warning"
            :icon="Star"
            color="#b94b4b"
        >
          В избраное
        </el-button>
      </div>
      <p class="vacancy-card__date">{{ publishedAt.toLocaleDateString() }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.vacancy-card {
  max-width: 655px;
  padding: 20px;
  margin: 20px;
  background-color: rgba(63, 78, 105, 0.4);
  border-radius: 10px;

  &__info {
    margin-bottom: 20px;
    color: #bebebe;
  }

  &__date {
    color: #bebebe;
  }

  &__name {
    margin-bottom: 25px;
    font-weight: bolder;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__group {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  &:hover {
    transition: 0.55s;
    transform: scale(1.02);
  }
}
</style>