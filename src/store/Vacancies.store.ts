import { defineStore } from "pinia";
import {vacanciesApi} from "@/api/Vacancies.api";

interface State {
    vacancies: any;
    optionFilters: any;
    page: number;
};

export const useVacanciesStore = defineStore('vacancies', {
    state: () => ({
        vacancies: [],
        optionFilters: {},
        page: 1,
    } as State),
    getters: {
        getVacancies(state) {
            return state.vacancies
        },
    },
    actions: {
        async setVacancies(){
            const params = {
                text: 'Программирование',
                page: 1,
            }
            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
        },
        async setFilter(optionsFilter: any) {
            this.optionFilters = optionsFilter;

            const params = {
                text: this.optionFilters.text,
                page: 1,
                salary: this.optionFilters.salary,
                schedule: this.optionFilters.schedule,
                area: this.optionFilters.area
            }
            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
        },
        async setPage(page: number) {
            this.page = page;

            const params = {
                text: this.optionFilters.text,
                page: this.page,
                salary: this.optionFilters.salary,
                schedule: this.optionFilters.schedule,
                area: this.optionFilters.area
            }

            const [error, response] = await vacanciesApi.getVacancies(params);
            response.items.forEach((vacancy: any) => this.vacancies.push(vacancy));
        }
    }
});