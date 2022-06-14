import axios from 'axios';
import {authStore} from "../index";

const baseURL = 'http://178.21.8.143:5000'

export const API = axios.create({
    baseURL: baseURL
})

export const AUTH_API = axios.create({
    baseURL: baseURL
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