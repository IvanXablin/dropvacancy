import { defineStore } from 'pinia';
import { vacanciesApi } from '@/entities/vacancy/api/vacancy-api';
import type { TVacancy } from '@/shared/types/TVacancy';

interface State {
    vacancies: TVacancy[];
    count: number;
    optionFilters: any;
    text: string;
    salary: number | null;
    schedule: string | null;
    area: number | null;
    orderBy: string | null;
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
        area: 1,
        orderBy: null,
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
                page: this.page,
                area: this.area,
                salary: this.salary,
                schedule: this.schedule,
                orderBy: this.orderBy,
            };
            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
            this.count = response.found;
        },

        async setVacanciesMap() {
            const params = {
                text: this.text,
                area: this.area,
                salary: this.salary,
                schedule: this.schedule,
                orderBy: this.orderBy,
            };

            if (this.page > 1) {
              for (let i = 0; i < this.page; i++) {
                const [error, response] = await vacanciesApi.getVacancies(params);
                response.items.forEach((vacancy: any) => this.vacancies.push(vacancy));
              }
            }
        },

        async setFromStorageVacancies() {
            const storageVacancies: TVacancy[] = [];

            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue;
                }
                const [error, response] = await vacanciesApi.getVacancyById(key);
                storageVacancies.push(response);
            }
            this.vacancies = storageVacancies;
            this.count = -1;
        },

        async setCountVacancies() {
            await this.setVacancies()
        },

        async setFilter(optionsFilter: any) {
            this.optionFilters = optionsFilter;

            this.text = optionsFilter.text || 'Разработчик AND Программист';
            this.salary = optionsFilter.salary;
            this.schedule = optionsFilter.schedule;
            this.area = optionsFilter.area;

            const params = {
                text: this.text,
                page: this.page,
                salary: this.salary,
                schedule: this.schedule,
                area: this.area,
                orderBy: this.orderBy,
            };

            const [error, response] = await vacanciesApi.getVacancies(params);
            this.vacancies = response.items;
            this.count = response.found;
        },

        async setOrderBy(option: string) {

            this.orderBy = option;

            const params = {
                text: this.text,
                page: this.page,
                area: this.area,
                salary: this.salary,
                schedule: this.schedule,
                orderBy: this.orderBy,
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
                orderBy: this.orderBy,
            };
            const [error, response] = await vacanciesApi.getVacancies(params);
            response.items.forEach((vacancy: any) => this.vacancies.push(vacancy));
        },

        removeVacancyById(id: string) {
           this.vacancies = this.vacancies.filter((vacancy: TVacancy) => vacancy.id !== id);
        }
    }
});