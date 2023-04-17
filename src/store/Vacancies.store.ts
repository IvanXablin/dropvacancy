import { defineStore } from "pinia";
import { vacanciesApi } from "@/api/Vacancies.api";
import type { TVacancy } from "@/types/TVacancy";

interface State {
    vacancies: TVacancy[];
    count: number;
    optionFilters: any;
    text: string;
    salary: number | null;
    schedule: string | null;
    area: number | null;
    page: number;
};

export const useVacanciesStore = defineStore('vacancies', {
    state: () => ({
        vacancies: [],
        count: 0,
        optionFilters: {},
        text: 'Разработчик AND Программист',
        salary: null,
        schedule: null,
        area: null,
        page: 1,
    } as State),
    getters: {
        getVacancies(state) {
            if (!state.vacancies.length) {
                return false;
            }
            return state.vacancies;
        },
        getCountVacancies(state) {
            return state.count;
        },
        getSettingsFilter(state) {
            return {
                text: state.text,
                salary: state.salary,
                schedule: state.schedule,
                area: state.area,
                page: state.page
            }
        }
    },
    actions: {
        async setVacancies() {
            const params = {
                text: this.text,
                page: 1,
                area: 4
            };
            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
            this.count = response.found;
        },
        async setCountVacancies() {
            await this.setVacancies()
        },
        async setFilter(optionsFilter: any) {
            this.optionFilters = optionsFilter;

            this.text = optionsFilter.text;
            this.salary = optionsFilter.salary;
            this.schedule = optionsFilter.schedule;
            this.area = optionsFilter.area;

            const params = {
                text: this.text,
                page: 1,
                salary: this.salary,
                schedule: this.schedule,
                area: this.area,
            };
            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
            this.count = response.found;
        },
        async setPage(page: number) {
            this.page = page;

            const params = {
                text: this.text,
                page: this.page,
                salary: this.salary,
                schedule: this.schedule,
                area: this.area,
            }
            const [error, response] = await vacanciesApi.getVacancies(params);
            response.items.forEach((vacancy: any) => this.vacancies.push(vacancy));
        }
    }
});