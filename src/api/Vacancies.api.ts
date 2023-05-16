import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/utils/AxiosService';

class VacanciesAPI extends AxiosService {
    constructor(config?: AxiosRequestConfig) {
        super(config);
    }
    public getVacancies(params: any) {
        return this.axiosCall({
            method: 'get',
            url: '/vacancies',
            params: params
        })
    }
    public getVacancyById(id: string) {
        return this.axiosCall({
            method: 'get',
            url: `/vacancies/${id}?host=hh.ru`,
        })
    }

    public getCities() {
        return this.axiosCall({
            method: 'get',
            url: '/areas',
        })
    }
}

export const vacanciesApi = new VacanciesAPI({
    baseURL: 'https://api.hh.ru',
    withCredentials: false,
});