import {AxiosResponse} from "axios";
import {action, makeObservable, observable} from "mobx";

export class FetchDataStore<T> {
    data: T | null
    request: () => Promise<AxiosResponse<T>>
    isLoading: boolean
    error: Error | unknown

    constructor(data: T | null, request: () => Promise<AxiosResponse<T>>) {
        this.data = data
        this.request = request
        this.isLoading = false
        this.error = null
        makeObservable(this,
            {
                data: observable,
                setData: action,
                isLoading: observable,
                setIsLoading: action,
                error: observable,
                setError: action,
            })
    }

    setData(value: T | null) {
        this.data = value;
    }

    setIsLoading(value: boolean) {
        this.isLoading = value;
    }

    setError(value: Error | unknown) {
        this.error = value;
    }

    async fetch() {
        this.setIsLoading(true)
        try {
            const response = await this.request()
            this.setData(response.data)
            this.setIsLoading(false)
        } catch (e) {
            this.setError(e)
        } finally {
            this.setIsLoading(false)
        }

    }
}