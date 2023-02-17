import type { AxiosRequestConfig } from 'axios';
import { AxiosService } from "@/api/AxiosService";
import type { TUser } from "@/types/TUser";

class AuthApi extends AxiosService {
    constructor(config?: AxiosRequestConfig) {
        super(config)
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
            headers: {
                'Content-Type': 'application/json'
            }
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
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public logout() {
        return this.axiosCall({
            method: 'get',
            url: '',
        })
    }
}

export const authApi = new AuthApi({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})