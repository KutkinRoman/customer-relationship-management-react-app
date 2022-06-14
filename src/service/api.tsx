import axios from 'axios';
import {authStore} from "../index";

export const API = axios.create({
    baseURL: process.env.REACT_APP_API_URI
})

export const AUTH_API = axios.create({
    baseURL: process.env.REACT_APP_API_URI
})

AUTH_API.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.authorization = authStore.getAuthorizationAccessToken()
    return config
})

AUTH_API.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest.isRetry) {
        originalRequest.isRetry = true
        try {
            await authStore.refresh()
            return AUTH_API.request(originalRequest)
        } catch (e) {
            throw error
        }
    } else {
        throw error
    }
})