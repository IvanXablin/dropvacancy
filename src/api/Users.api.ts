import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/api/AxiosService';

class UsersAPI extends AxiosService {
    constructor(config?: AxiosRequestConfig) {
        super(config);
    }
    public getInfo(id: string | undefined) {
        return this.axiosCall({
            method: 'post',
            url: '/user/info',
            data: {
                _id: id
            } ,
        })
    }
}

export const usersApi = new UsersAPI({
    baseURL: 'https://api.dropvacancy.ru',
    withCredentials: false,
});