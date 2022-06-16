import React, {createContext, FC, useContext, useEffect} from 'react';
import {AuthStore} from "../store/auth/AuthStore";
import {observer} from "mobx-react-lite";
import {ImageContext} from "./ImageContext";
import {CustomThemeContext} from "./CustomThemeContext";
import {CustomerRequestEventColorContext} from "./CustomerRequestEventColorContext";

const AuthContext = createContext<AuthStore | null>(null);

interface AuthContextProviderProps {
    authStore: AuthStore
    children: React.ReactNode
}

const AuthContextProvider: FC<AuthContextProviderProps> = observer(({children, authStore}) => {

    const themeStore = useContext(CustomThemeContext)
    const imageStore = useContext(ImageContext)
    const eventColorStore = useContext(CustomerRequestEventColorContext)

    useEffect(() => {
        if (!authStore.isLoading) {
            authStore.init()
        }
    }, [])

    useEffect(() => {
        if (authStore.user) {
            imageStore.updateBackgroundImageByUsernameId(authStore.user.username)
            themeStore.updatePaletteByUsernameId(authStore.user.username)
            eventColorStore.updateColorByUserName(authStore.user.username)
        }
    }, [authStore.user])

    return (
        <AuthContext.Provider value={authStore}>
            {children}
        </AuthContext.Provider>
    )
})

export {
    AuthContext,
    AuthContextProvider
}




