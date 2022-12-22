import React, {FC, useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Valid} from "../../../utils/ValidationUtils";
import AppFormItem from "../../UI/form/AppFormItem";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import AppFormHeader from "../../UI/form/AppFormHeader";
import AppFormAction from "../../UI/form/AppFormAction";
import AppDivider from "../../UI/divider/AppDivider";
import {AuthContext} from "../../../context/AuthContext";
import {useErrorHandler} from "../../../hooks/useErrorHandler";
import {AuthService} from "../../../service/AuthService";
import AppLoadingButton from "../../UI/button/AppLoadingButton";

const LoginForm: FC = () => {

    const {handleResponseError} = useErrorHandler()
    const [isLoading, setIsLoading] = useState(false)
    const authStore = useContext(AuthContext)
    const loginForm = useForm({mode: 'all'})

    Valid.requiredMinMaxLength(loginForm.register, 'username', 2, 30)
    Valid.requiredMinMaxLength(loginForm.register, 'password', 2, 30)

    const handleLogin = async (data: any) => {
        setIsLoading(true)
        try {
            const response = await AuthService.login(data)
            authStore?.handleAuthResponse(response.data)
        } catch (e) {
            // @ts-ignore
            handleResponseError(e.response.data, loginForm.setError)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            onSubmit={loginForm.handleSubmit(handleLogin)}
        >
            <AppFormHeader
                text={'Аутентификация'}
            />
            <AppDivider/>
            <AppFormItem>
                <AppTextFieldController
                    id={'username'}
                    autoComplete={true}
                    label={'Имя пользователя'}
                    name={'username'}
                    control={loginForm.control}
                    errors={loginForm.formState.errors}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextFieldController
                    id={'password'}
                    autoComplete={true}
                    label={'Пароль'}
                    name={'password'}
                    type={'password'}
                    control={loginForm.control}
                    errors={loginForm.formState.errors}
                />
            </AppFormItem>
            <AppFormAction>
                <AppLoadingButton
                    submit={true}
                    loading={isLoading}
                >
                    ВОЙТИ
                </AppLoadingButton>
            </AppFormAction>
        </form>
    );
};

export default LoginForm;