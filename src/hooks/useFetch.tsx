import {useState} from "react";
import {AxiosResponse} from "axios";

export function useFetch<T>(callback: () => Promise<AxiosResponse<T>>) {
    const [data, setData] = useState<T>()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | unknown>(null)

    const fetching = async (...args: []) => {
        try {
            setLoading(true)
            const response = await callback(...args)
            setData(response.data)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }
    return {
        data,
        fetching,
        isLoading,
        error
    }
}