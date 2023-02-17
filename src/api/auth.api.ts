import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from '@/api/AxiosService';
import type { TUser } from '@/types/TUser';

class AuthApi extends AxiosService {
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

export const authApi = new AuthApi({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});