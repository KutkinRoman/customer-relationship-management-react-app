import React from 'react';
import {useForm} from "react-hook-form";
import {Valid} from "../../../utils/ValidationUtils";
import {useSubmitForm} from "../../../hooks/useSubmitForm";
import AppFormHeader from "../../UI/form/AppFormHeader";
import AppFormItem from "../../UI/form/AppFormItem";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import AppFormAction from "../../UI/form/AppFormAction";
import AppLoadingButton from "../../UI/button/AppLoadingButton";
import {CustomerRequestService} from "../../../service/CustomerRequestService";
import {Link} from "@mui/material";

const NewCustomerRequestsForm = () => {

    const form = useForm({mode: 'onChange'})

    Valid.requiredMinMaxLength(form.register, 'lastName', 2, 30)
    Valid.requiredMinMaxLength(form.register, 'firstName', 2, 30)
    form.register('phone', {...Valid.maxLength(11)})

    const {onSubmit, isLoading} = useSubmitForm({
        submitCallback: formData => CustomerRequestService.newCustomerRequest(formData),
        success: () => form.reset(),
        successAletMessage: 'Новая заявка сохранена',
        setError: form.setError
    })

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete={'off'}
        >
            <AppFormHeader
                text={'Новая заявка'}
            />
            <AppFormItem>
                <AppTextFieldController
                    label={'Фамилия'}
                    name={'lastName'}
                    control={form.control}
                    errors={form.formState.errors}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextFieldController
                    label={'Имя'}
                    name={'firstName'}
                    control={form.control}
                    errors={form.formState.errors}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextFieldController
                    label={'Номер телефона'}
                    name={'phone'}
                    control={form.control}
                    errors={form.formState.errors}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextFieldController
                    label={'ID ВКонтакте'}
                    name={'vkontakteId'}
                    control={form.control}
                    errors={form.formState.errors}
                />
            </AppFormItem>
            <AppFormAction>
                <Link
                    href={'https://regvk.com/id/'}
                    target={'_blank'}
                    color={'primary.main'}
                >
                    Как узнать ID ВКонтакте ?
                </Link>
            </AppFormAction>
            <AppFormAction>
                <AppLoadingButton
                    fullWidth={true}
                    submit={true}
                    disabled={!form.formState.isValid || !form.formState.isDirty}
                    loading={isLoading}
                >
                    Сохранить
                </AppLoadingButton>
            </AppFormAction>
        </form>
    );
};

export default NewCustomerRequestsForm;