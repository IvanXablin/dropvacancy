import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/utils/AxiosService';
import type { TUser } from '@/types/TUser';

class AuthAPI extends AxiosService {
    constructor(config?: AxiosRequestConfig) {
        super(config);
    }
    public login(user: TUser) {
        const { name, email, password, } = user;

        return this.axiosCall({
            method: 'post',
            url: '/auth/login',
            data: {
                name,
                email,
                password,
            },
        })
    }
    public register(user: TUser) {
        const { name, email, password, } = user;

        return this.axiosCall({
            method: 'post',
            url: '/auth/register',

            data: {
                name,
                email,
                password,
            },
        })
    }
}

export const authApi = new AuthAPI({
    baseURL: 'https://api.dropvacancy.ru/',
    withCredentials: true,
});