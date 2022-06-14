import {useContext, useState} from "react";
import {AxiosResponse} from "axios";
import {useErrorHandler} from "./useErrorHandler";
import {AlertContext} from "../context/AlertContext";
import {UseFormSetError} from "react-hook-form/dist/types/form";

interface Props<T> {
    submitCallback: (formData: any) => Promise<AxiosResponse<T>>,
    success: (responseData: T) => void,
    successAletMessage?: string
    setError: UseFormSetError<any>
}

export function useSubmitForm<T>(props: Props<T>) {

    const {handleResponseError} = useErrorHandler()
    const {alertSuccessSave, alertSuccess} = useContext(AlertContext)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (formData: any) => {
        try {
            setIsLoading(true)
            const response = await props.submitCallback(formData)
            props.success(response.data)

            if (props.successAletMessage) {
                alertSuccess(props.successAletMessage)
            } else {
                alertSuccessSave()
            }
        } catch (e) {
            // @ts-ignore
            handleResponseError(e.response.data, props.setError)
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        onSubmit,
        isLoading,
    }
}