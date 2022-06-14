import React, {FC, useContext} from 'react';
import {useForm} from "react-hook-form";
import {Valid} from "../../../utils/ValidationUtils";
import AppFormItem from "../../UI/form/AppFormItem";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import AppFormHeader from "../../UI/form/AppFormHeader";
import AppFormAction from "../../UI/form/AppFormAction";
import AppButton from "../../UI/button/AppButton";
import AppDivider from "../../UI/divider/AppDivider";
import {AuthContext} from "../../../context/AuthContext";
import {useErrorHandler} from "../../../hooks/useErrorHandler";
import {AuthService} from "../../../service/AuthService";

const LoginForm: FC = () => {

    const {handleResponseError} = useErrorHandler()
    const authStore = useContext(AuthContext)
    const loginForm = useForm({mode: 'all'})

    Valid.requiredMinMaxLength(loginForm.register, 'username', 2, 30)
    Valid.requiredMinMaxLength(loginForm.register, 'password', 2, 30)

    const handleLogin = async (data: any) => {
        try {
            const response = await AuthService.login(data)
            authStore?.handleAuthResponse(response.data)
        } catch (e) {
            // @ts-ignore
            handleResponseError(e.response.data, loginForm.setError)
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
                    id={'email'}
                    label={'Имя пользователя'}
                    name={'username'}
                    control={loginForm.control}
                    errors={loginForm.formState.errors}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextFieldController
                    id={'password'}
                    label={'Пароль'}
                    name={'password'}
                    type={'password'}
                    control={loginForm.control}
                    errors={loginForm.formState.errors}
                />
            </AppFormItem>
            <AppFormAction>
                <AppButton
                    submit={true}
                    disabled={!loginForm.formState.isValid || !loginForm.formState.isDirty}
                >
                    ВОЙТИ
                </AppButton>
            </AppFormAction>
        </form>
    );
};

export default LoginForm;