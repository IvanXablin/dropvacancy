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
            params: params,
            headers: {
                Authorization: `Bearer USERLGQ8MSCQNPKE3EJ182UG168QAS9LPN3DVAN5LVA5949TOJG3JUOQ3D393RIC`,
            }
        })
    }
    public getVacancyById(id: string) {
        return this.axiosCall({
            method: 'get',
            url: `/vacancies/${id}?host=hh.ru`,
            headers: {
                Authorization: `Bearer USERLGQ8MSCQNPKE3EJ182UG168QAS9LPN3DVAN5LVA5949TOJG3JUOQ3D393RIC`,
            }
        })
    }
}

export const vacanciesApi = new VacanciesAPI({
    baseURL: 'https://api.hh.ru',
    withCredentials: false,
});

