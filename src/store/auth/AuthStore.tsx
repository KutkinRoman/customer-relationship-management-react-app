import {IUser, User} from "../../model/user/User";
import {makeAutoObservable} from "mobx";
import {AuthService} from "../../service/AuthService";
import {IAccessTokenDecode, IAuthResponse} from "../../types/types";
import jwt_decode from 'jwt-decode'

export class AuthStore {

    private readonly accessTokenKey: string = 'access_token'
    private readonly refreshTokenKey: string = 'refresh_token'

    isAuth: boolean
    isLoading: boolean
    user: IUser | undefined

    constructor() {
        this.isLoading = false
        this.isAuth = false
        makeAutoObservable(this)
    }

    private setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth
    }

    private setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading
    }


    public init() {
        this.setIsLoading(true)
        try {
            const accessToken = localStorage.getItem(this.accessTokenKey);
            if (accessToken) {
                const jwtDecode = jwt_decode<IAccessTokenDecode>(accessToken)
                this.setIsAuth(true)
                this.user = new User(jwtDecode.sub, jwtDecode.roles)
            }
        } finally {
            this.setIsLoading(false)
        }
    }

    public async refresh() {
        try {
            const refreshToken = localStorage.getItem(this.refreshTokenKey)
            if (refreshToken) {
                const response = await AuthService.refresh(refreshToken)
                this.handleAuthResponse(response.data)
            }
        } catch (e) {
            this.setIsAuth(false)
            this.user = undefined
            localStorage.removeItem(this.accessTokenKey)
            localStorage.removeItem(this.refreshTokenKey)
        }
    }

    public handleAuthResponse(authResponse: IAuthResponse) {
        localStorage.setItem(this.accessTokenKey, authResponse.accessToken)
        localStorage.setItem(this.refreshTokenKey, authResponse.refreshToken)
        const jwtDecode = jwt_decode<IAccessTokenDecode>(authResponse.accessToken)
        this.setIsAuth(true)
        this.user = new User(jwtDecode.sub, jwtDecode.roles)
    }

    public getAuthorizationAccessToken() {
        return `Bearer ${localStorage.getItem(this.accessTokenKey)}`
    }

    public async logout() {
        this.setIsAuth(false)
        this.user = undefined
        localStorage.removeItem(this.accessTokenKey)
        localStorage.removeItem(this.refreshTokenKey)
    }

}