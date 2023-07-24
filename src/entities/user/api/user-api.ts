import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/shared/utils/AxiosService';
import type { TUser } from '@/shared/types/TUser';

class UserApi extends AxiosService {
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

export const authApi = new UserApi({
    baseURL: 'https://api.dropvacancy.ru/',
    withCredentials: true,
});