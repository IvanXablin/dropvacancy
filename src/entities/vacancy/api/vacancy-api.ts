import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/shared/utils/AxiosService';

class VacancyApi extends AxiosService {
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
            url: `/vacancies/${id}?host=hh.ru`
        })
    }
}

export const vacanciesApi = new VacancyApi({
    baseURL: 'https://api.hh.ru',
    withCredentials: false,
});

