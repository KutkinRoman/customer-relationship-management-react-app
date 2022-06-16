import React, {createContext, FC} from "react";
import {SnackbarProvider, useSnackbar, VariantType} from "notistack";

enum Message {
    SUCCESS_SAVE = 'Изменения сохранены',
    ERROR_SAVE = 'Возникла ошибка при сохранении'
}

const styles = {
    '& .SnackbarItem-variantSuccess': {
        backgroundColor: 'background.paper',
        color: 'success.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantError': {
        backgroundColor: 'background.paper',
        color: 'error.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantWarning': {
        backgroundColor: 'background.paper',
        color: 'warning.main',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    '& .SnackbarItem-variantInfo': {
        backgroundColor: 'background.paper',
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
            maxSnack={10}
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