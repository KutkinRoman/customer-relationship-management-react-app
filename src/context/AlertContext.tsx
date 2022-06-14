import React, {createContext, FC} from "react";
import {SnackbarProvider, useSnackbar, VariantType} from "notistack";

enum Message {
    SUCCESS_SAVE = 'Изменения сохранены',
    ERROR_SAVE = 'Возникла ошибка при сохранении'
}

const styles = {
    '& .SnackbarItem-variantSuccess': {
        backgroundColor: 'primary.light',
        color: 'success.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantError': {
        backgroundColor: 'primary.light',
        color: 'error.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantWarning': {
        backgroundColor: 'primary.light',
        color: 'warning.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantInfo': {
        backgroundColor: 'primary.light',
        color: 'info.main',
        borderRadius: 5,
        fontWeight: 'bold'
    }
}

interface Props {
    children: React.ReactNode
}

const AlertContentProvider: FC<Props> = ({children}) => {
    return (
        <SnackbarProvider
            maxSnack={5}
            // @ts-ignore
            sx={styles}
        >
            <EnqueueSnackbarProvider>
                {children}
            </EnqueueSnackbarProvider>
        </SnackbarProvider>
    );
};


const EnqueueSnackbarProvider: FC<Props> = ({children}) => {

    const {enqueueSnackbar} = useSnackbar();

    const alert = (message: string) => enqueueSnackbar(message)

    const alertSuccess = (message: string) => enqueueSnackbar(message, {variant: 'success'})
    const alertSuccessSave = () => alertSuccess(Message.SUCCESS_SAVE)

    const alertError = (message: string) => enqueueSnackbar(message, {variant: 'error'})
    const alertErrorSave = () => alertError(Message.ERROR_SAVE)

    const alertWarning = (message: string) => enqueueSnackbar(message, {variant: 'warning'})

    const alertInfo = (message: string) => enqueueSnackbar(message, {variant: 'info'})

    return (
        <AlertContext.Provider
            value={{
                alert,
                alertSuccess,
                alertSuccessSave,
                alertError,
                alertErrorSave,
                alertWarning,
                alertInfo
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}


const AlertContext = createContext({
    alert: (message: string, options: VariantType) => {
    },
    alertSuccess: (message: string) => {
    },
    alertSuccessSave: () => {
    },
    alertError: (message: string) => {
    },
    alertErrorSave: () => {
    },
    alertWarning: (message: string) => {
    },
    alertInfo: (message: string) => {
    }
})

export {
    AlertContentProvider,
    AlertContext
}