import {API, AUTH_API} from "./api";
import {IAuthResponse} from "../types/types";

export class AuthService {

    public static async login(data: any) {
        return await API.post<IAuthResponse>('/api/v1/auth/login', data)
    }

    public static async refresh(refreshToken: string) {
        return await API.post<IAuthResponse>('/api/v1/auth/refresh', {
            refreshToken
        })
    }

    public static async logout() {
        return await AUTH_API.post('/api/v1/auth/logout')
    }
}