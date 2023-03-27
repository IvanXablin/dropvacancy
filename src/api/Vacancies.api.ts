import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/api/AxiosService';

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
}

export const vacanciesApi = new VacanciesAPI({
    baseURL: 'https://api.hh.ru',
    withCredentials: false,
});