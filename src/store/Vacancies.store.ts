import { defineStore } from "pinia";

interface State {
    filters: string;
    sorts: string;
};

export const useVacanciesStore = defineStore('optionsFilter', {
    state: () => ({
        repositories: [],
        filters: '',
        sorts: ''
    } as State),
    getters: {
        getFilteredRepositories(state) {

        },
        getSortedRepositories(state) {

        },
        getRepositories(state) {
        }
    },
    actions: {
        setRepositories() {

        },
        setFilter(filterQuery: string) {

        },
        setSort(sortQuery: string) {

        }
    }
});