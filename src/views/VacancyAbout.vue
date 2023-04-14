<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { vacanciesApi } from "@/api/Vacancies.api";
const route = useRoute();

const vacancy = ref<any>(null);
const activeNames = ref(['1'])

onMounted(async () => {
  const [error, response] = await vacanciesApi.getVacancyById(String(route.params.id))
  vacancy.value = response
})
</script>

<template>
  <div class="vacancy-about">
    <div class="vacancy-about__content">
      <div class="vacancy-about__title">
        <h1>{{ vacancy?.name }}</h1>
        <h3>от {{ vacancy?.salary?.from }} руб. на руки</h3>
        <p>Требуемый опыт работы: {{ vacancy?.experience?.name }}</p>
        <p>Тип занятости: {{ vacancy?.employment?.name }}</p>
      </div>
      <h2>Описание:</h2>
      <div class="vacancy-about__description" v-html="vacancy?.description"></div>
      <h2>Ключевые навыки:</h2>
      <div class="vacancy-about__tags">
        <el-tag
            v-for="skill in vacancy?.key_skills"
            :key="skill.name"
            class="ml-2"
            type="info"
            size="large"
            round
        >
          {{ skill.name }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vacancy-about {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 1080px;
    padding: 50px;
    background-color: rgba(30, 44, 63, 0.33);
    border-radius: 10px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px;
    background-color: rgba(30, 44, 63, 0.63);

    strong {
      font-weight: bolder;
    }

    li {
      margin-left: 15px;
      margin-bottom: 20px;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    background-color: rgba(30, 44, 63, 0.63);
  }
}
</style>