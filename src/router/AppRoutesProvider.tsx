import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import CRMWrapper from "../components/app-wrappers/CRMWrapper";
import {AppPaths} from "./AppPaths";
import PublicWrapper from "../components/app-wrappers/PublicWrapper";
import LoginPage from "../pages/public/LoginPage";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../context/AuthContext";
import {UserRole} from "../model/user/UserRole";
import LoadingPage from "../pages/public/LoadingPage";

const AppRoutesProvider = observer(() => {

    const authStore = useContext(AuthContext)

    return (
        <Routes>
            {authStore?.isLoading
                ? <Route
                    path={"/*"}
                    element={<LoadingPage/>}
                />
                : <React.Fragment>
                    <Route
                        path={AppPaths.login}
                        element={<LoginPage/>}
                    />
                    <Route
                        path={AppPaths.indexCRM + "/*"}
                        element={
                            authStore?.isAuth && authStore.user?.roles.includes(UserRole.MANAGER)
                                ? <CRMWrapper/>
                                : <LoginPage/>
                        }/>
                    <Route
                        path={AppPaths.index + "/*"}
                        element={<PublicWrapper/>}
                    />
                </React.Fragment>
            }
        </Routes>
    )
})


export {AppRoutesProvider}