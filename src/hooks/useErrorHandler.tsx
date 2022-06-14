import {IErrorResponse} from "../types/errors";
import {UseFormSetError} from "react-hook-form/dist/types/form";
import {useContext} from "react";
import {AlertContext} from "../context/AlertContext";

export const useErrorHandler = () => {

    const {alertError} = useContext(AlertContext)

    const handleResponseError = (err: IErrorResponse, setError?: UseFormSetError<any>) => {

        if (err.fieldMessages) {
            if (setError) {
                err.fieldMessages.forEach(msg => setError(msg.field, {message: msg.message}))
            } else {
                err.fieldMessages.forEach(msg => alertError(msg.message))
            }
        }

        if (err.message){
            alertError(err.message.toString())
        }
    }

    return {
        handleResponseError
    }
}