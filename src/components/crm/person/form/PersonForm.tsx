import React, {FC, useContext, useEffect} from 'react';
import AppFormHeader from "../../../UI/form/AppFormHeader";
import AppFormItem from "../../../UI/form/AppFormItem";
import AppTextFieldController from "../../../UI/form/AppTextFiledController";
import AppDatePickerController from "../../../UI/form/AppDatePickerController";
import AppFormAction from "../../../UI/form/AppFormAction";
import {useForm} from "react-hook-form";
import {Valid} from "../../../../utils/ValidationUtils";
import {PersonFormStore} from "../../../../store/person/PersonFormStore";
import {useSubmitForm} from "../../../../hooks/useSubmitForm";
import AppLoadingButton from "../../../UI/button/AppLoadingButton";
import {PersonFull} from "../../../../model/person/PersonFull";
import {PersonService} from "../../../../service/PersonService";
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import AppSwitch from "../../../UI/form/AppSwitch";
import {AuthContext} from "../../../../context/AuthContext";
import {UserRole} from "../../../../model/user/UserRole";


interface PersonFormProps {
    personFormStore: PersonFormStore
}

const PersonForm: FC<PersonFormProps> = observer(
    ({
         personFormStore
     }) => {

        const authStore = useContext(AuthContext)

        const personForm = useForm({mode: 'onChange'})

        Valid.requiredMinMaxLength(personForm.register, 'lastName', 2, 30)
        Valid.requiredMinMaxLength(personForm.register, 'firstName', 2, 30)
        personForm.register('middleName', {...Valid.maxLength(30)})
        personForm.register('telephone', {...Valid.maxLength(11)})
        personForm.register('email', {...Valid.maxLength(30)})
        personForm.register('description', {...Valid.maxLength(2000)})

        function resetForm() {
            if (personFormStore.person) {
                personForm.resetField('id')
                personForm.resetField('firstName', {defaultValue: personFormStore.person.firstName})
                personForm.resetField('firstName', {defaultValue: personFormStore.person.firstName})
                personForm.resetField('lastName', {defaultValue: personFormStore.person.lastName})
                personForm.resetField('middleName', {defaultValue: personFormStore.person.middleName})
                personForm.resetField('dateBirth', {defaultValue: personFormStore.person.info.dateBirth})
                personForm.resetField('telephone', {defaultValue: personFormStore.person.info.telephone})
                personForm.resetField('email', {defaultValue: personFormStore.person.info.email})
                personForm.resetField('description', {defaultValue: personFormStore.person.info.description})
                personForm.reset()
            } else {
                personForm.resetField('dateBirth', {defaultValue: null})
            }
        }

        const {isLoading, onSubmit} = useSubmitForm<PersonFull>({
            submitCallback: formData => PersonService.saveOrUpdate(formData),
            success: responseData => {
                if (personFormStore.isNew) {
                    personFormStore.setPerson(new PersonFull(responseData))
                    personFormStore.setIsNew(false)
                } else {
                    personFormStore.person?.update(responseData)
                }
                resetForm()
            },
            setError: personForm.setError
        })

        useEffect(() => {
            resetForm()
        }, [personFormStore.person])

        useEffect(() => {
            if (personForm.formState.isValid && personForm.formState.isDirty && personFormStore.person?.id) {
                personForm.setValue('id', personFormStore.person?.id)
            }
        }, [personForm.formState.isValid, personForm.formState.isDirty])

        async function handleOnChangeOutMessage(checked: boolean) {
            const response = await PersonService.updateOutMessageByPersonId(personFormStore.person?.id, checked)
            personFormStore.person?.update(response.data)
        }

        async function handleOnChangeIsCustomer(checked: boolean) {
            const response = await PersonService.updateCustomerByPersonId(personFormStore.person?.id, checked)
            personFormStore.person?.update(response.data)
        }

        async function handleOnChangeIsCoach(checked: boolean) {
            const response = await PersonService.updateCoachByPersonId(personFormStore.person?.id, checked)
            personFormStore.person?.update(response.data)
        }

        async function handleOnChangeIsEmployee(checked: boolean) {
            const response = await PersonService.updateEmployeeByPersonId(personFormStore.person?.id, checked)
            personFormStore.person?.update(response.data)
        }


        return (
            <form
                onSubmit={personForm.handleSubmit(onSubmit)}
                autoComplete={'off'}
            >
                <AppFormHeader
                    text={
                        personFormStore.isNew
                            ? 'Создание нового клиента'
                            : 'Редактирование данных клиента'
                    }
                />
                <AppFormItem>
                    <AppTextFieldController
                        label={'Фамилия'}
                        name={'lastName'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        label={'Имя'}
                        name={'firstName'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        label={'Отчество'}
                        name={'middleName'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppDatePickerController
                        label={'Дата рождения'}
                        name={'dateBirth'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        label={'Номер телефона'}
                        name={'telephone'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        label={'E-mail'}
                        name={'email'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        label={'Дополнительная информация'}
                        name={'description'}
                        control={personForm.control}
                        errors={personForm.formState.errors}
                        rows={4}
                    />
                </AppFormItem>
                <AppFormAction>
                    <AppLoadingButton
                        fullWidth={true}
                        submit={true}
                        disabled={!personForm.formState.isValid || !personForm.formState.isDirty}
                        loading={isLoading}
                    >
                        Сохранить
                    </AppLoadingButton>
                </AppFormAction>
                {!personFormStore.isNew &&
                    <AppFormItem>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                        >
                            {personFormStore.person?.info.vkontakteId &&
                                <AppSwitch
                                    text={'Отправка сообщений'}
                                    checked={personFormStore.person?.info.isOutMessage || false}
                                    handleOnChange={handleOnChangeOutMessage}
                                />
                            }
                            <AppSwitch
                                text={'Клиент'}
                                checked={personFormStore.person?.isCustomer || false}
                                handleOnChange={handleOnChangeIsCustomer}
                            />
                            {authStore?.user?.roles.includes(UserRole.ADMIN) &&
                                <React.Fragment>
                                    <AppSwitch
                                        text={'Тренер'}
                                        checked={personFormStore.person?.isCoach || false}
                                        handleOnChange={handleOnChangeIsCoach}
                                    />
                                    <AppSwitch
                                        text={'Сотрудник'}
                                        checked={personFormStore.person?.isEmployee || false}
                                        handleOnChange={handleOnChangeIsEmployee}
                                    />
                                </React.Fragment>
                            }
                        </Box>
                    </AppFormItem>
                }
            </form>
        );
    });

export default PersonForm;