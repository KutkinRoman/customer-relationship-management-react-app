import React, {createContext, FC, useEffect} from 'react';
import {AuthStore} from "../store/auth/AuthStore";

const AuthContext = createContext<AuthStore | null>(null);

interface AuthContextProviderProps {
    authStore: AuthStore
    children: React.ReactNode
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({children, authStore}) => {

    useEffect(() => {
        if (!authStore.isLoading){
            authStore.init()
        }
    }, [])

    return (
        <AuthContext.Provider value={authStore}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthContextProvider
}




