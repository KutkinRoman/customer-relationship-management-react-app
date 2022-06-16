import React, {FC, useContext, useEffect, useState} from 'react';
import {CustomerRequestFormStore} from "../../../store/customer-request/CustomerRequestFormStore";
import AppFormItem from "../../UI/form/AppFormItem";
import {AppTextField} from "../../UI/form/AppTextField";
import AppFormAction from "../../UI/form/AppFormAction";
import AppButtonGroup from "../../UI/button/AppButtonGroup";
import AppButton from "../../UI/button/AppButton";
import PageContentItem from "../../UI/page-content/PageContentItem";
import AppFormHeader from "../../UI/form/AppFormHeader";
import {Link, MenuItem, TableCell, Typography} from "@mui/material";
import {AppTable} from "../../UI/table/AppTable";
import TableRow from "@mui/material/TableRow";
import {createColorByEvent} from "../../../model/customer/CustomerRequestEvent";
import {useForm} from "react-hook-form";
import AppTextFiledController from "../../UI/form/AppTextFiledController";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import {Valid} from "../../../utils/ValidationUtils";
import AppLoadingButton from "../../UI/button/AppLoadingButton";
import {CustomerRequestService} from "../../../service/CustomerRequestService";
import {useSubmitForm} from "../../../hooks/useSubmitForm";
import {ICustomerRequest} from "../../../model/customer/CustomerRequest";
import AppDateTimePickerController from "../../UI/form/AppDateTimePickerController";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";
import {PersonFormContext} from "../../../context/PersonFormContext";
import {CoachingContext} from "../../../context/CoachingContext";
import {CoachContext} from "../../../context/CoachContext";
import AppQuestionDialog from "../../UI/dialog/AppQuestionDialog";
import useModal from "../../../hooks/useModal";

interface CustomerRequestFormProps {
    formStore: CustomerRequestFormStore
}

const PersonData: FC<CustomerRequestFormProps> = ({formStore}) => {

    const {initFormByPerson} = useContext(PersonFormContext)

    const handleFormByPerson = () => {
        if (formStore.customerRequest?.person) {
            initFormByPerson(formStore.customerRequest.person)
        }
    }

    return (
        <PageContentItem>
            <AppFormHeader
                text={'Персональные данные'}
            />
            <AppFormItem>
                <AppTextField
                    label={'Фамилия'}
                    value={formStore.customerRequest?.person.lastName}
                    readOnly={true}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextField
                    label={'Имя'}
                    value={formStore.customerRequest?.person.firstName}
                    readOnly={true}
                />
            </AppFormItem>
            <AppFormItem>
                <AppTextField
                    label={'Номер телефона'}
                    value={formStore.customerRequest?.person.info.telephone}
                    readOnly={true}
                />
            </AppFormItem>
            <AppFormAction>
                <AppButtonGroup>
                    <AppButton
                        variant={'text'}
                        onClick={handleFormByPerson}
                    >
                        Редактировать персональные данные
                    </AppButton>
                    <AppButton
                        variant={'text'}
                    >
                        <Link
                            component={'a'}
                            href={formStore.customerRequest?.person.info.pageLinkVk}
                            target={'_blank'}
                        >
                            Перейди на страницу ВКОНТАКТЕ
                        </Link>
                    </AppButton>
                    <AppButton
                        variant={'text'}
                    >
                        <Link
                            component={'a'}
                            href={formStore.customerRequest?.person.info.dialogLinkVk}
                            target={'_blank'}
                        >
                            Перейди в диалог ВКОНТАКТЕ
                        </Link>
                    </AppButton>
                </AppButtonGroup>
            </AppFormAction>
        </PageContentItem>
    )
}

const RequestCoaching: FC<CustomerRequestFormProps> = ({formStore}) => {

    const coachStore = useContext(CoachContext)
    const coachingDirectionStore = useContext(CoachingContext)
    const {isOpen, handleOpen, handleClose} = useModal()
    const [formData, setFormData] = useState<any>({})

    const {
        control,
        formState: {
            isDirty,
            isValid,
            errors
        },
        handleSubmit,
        resetField,
        register,
        setError
    } = useForm({mode: 'onChange'})

    register('coachingDirectionId', {...Valid.required()})
    register('coachId', {...Valid.required()})
    register('planDateTime', {...Valid.required()})

    const {
        onSubmit,
        isLoading
    } = useSubmitForm<ICustomerRequest>({
        submitCallback: formData => CustomerRequestService.newCoaching(formStore.customerRequest?.id, formData),
        success: responseData => {
            formStore.customerRequest?.update(responseData)
            resetForm()
        },
        setError
    })

    function resetForm() {
        resetField('coachingDirectionId', {defaultValue: formStore.customerRequest?.coachingDirection?.id})
        resetField('coachId', {defaultValue: formStore.customerRequest?.coach?.id})
        resetField('planDateTime', {defaultValue: formStore.customerRequest?.planDateTime})
    }

    function handleOnSubmit(data: any) {
        setFormData({...data})
        if (formStore.customerRequest?.person.info.isOutMessage) {
            handleOpen()
        } else {
            setFormData({...formData, isOutMessage: false})
        }
    }

    function handleSuccessQuestion() {
        setFormData({...formData, isOutMessage: true})
    }

    function handleNegativeQuestion() {
        setFormData({...formData, isOutMessage: false})
    }

    useEffect(() => {
        resetForm()
    }, [formStore.customerRequest])

    useEffect(() => {
        if (formData.isOutMessage !== undefined) {
            onSubmit({...formData, planDateTime: DateTimeUtils.toISODateTimeString(formData.planDateTime)})
        }
    }, [formData])


    return (
        <form
            onSubmit={handleSubmit(handleOnSubmit)}
        >
            <PageContentItem>
                <AppFormHeader
                    text={'Дата и время тренировки'}
                />
                <AppFormItem>
                    <AppTextFieldController
                        name={'coachingDirectionId'}
                        control={control}
                        errors={errors}
                        label={'Направление'}
                        select={true}
                        options={coachingDirectionStore?.data || []}
                        renderOption={(option) =>
                            <MenuItem
                                key={`coachingDirectionItem${option.id}`}
                                value={option.id}
                            >
                                {option.title}
                            </MenuItem>
                        }
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppTextFieldController
                        name={'coachId'}
                        control={control}
                        errors={errors}
                        label={'Тренер'}
                        select={true}
                        options={coachStore?.data || []}
                        renderOption={(option) =>
                            <MenuItem
                                key={`coachItem${option.id}`}
                                value={option.id}
                            >
                                {option.fullName}
                            </MenuItem>
                        }
                    />
                </AppFormItem>
                <AppFormItem>
                    <AppDateTimePickerController
                        name={'planDateTime'}
                        control={control}
                        errors={errors}
                        label={'Дата и время'}
                    />
                </AppFormItem>
                <AppFormAction>
                    <AppLoadingButton
                        loading={isLoading}
                        submit={true}
                        disabled={!isDirty || !isValid}
                    >
                        Сохранить
                    </AppLoadingButton>
                </AppFormAction>
            </PageContentItem>
            <AppQuestionDialog
                isOpen={isOpen}
                handleClose={handleClose}
                title={'Отправить сообщение клиенту?'}
                handleSuccess={handleSuccessQuestion}
                handleNegative={handleNegativeQuestion}
            />
        </form>
    )
}

const RequestCall: FC<CustomerRequestFormProps> = ({formStore}) => {
    const {
        control,
        formState: {
            isDirty,
            isValid,
            errors
        },
        handleSubmit,
        resetField,
        setError,
    } = useForm({mode: 'onChange'})

    const {
        onSubmit,
        isLoading
    } = useSubmitForm<ICustomerRequest>({
        submitCallback: formData => {
            formData.callDateTime = DateTimeUtils.toISODateTimeString(formData.callDateTime)
            return CustomerRequestService.saveCallDateTimeByCustomerRequestId(formStore.customerRequest?.id, formData)
        },
        success: responseData => formStore.customerRequest?.update(responseData),
        setError
    })

    useEffect(() => {
        resetField('callDateTime', {defaultValue: formStore.customerRequest?.callDateTime})
    }, [formStore.customerRequest?.callDateTime])

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <PageContentItem>
                <AppFormHeader
                    text={'Дата и время звонка'}
                />
                <AppFormItem>
                    <AppDateTimePickerController
                        name={'callDateTime'}
                        control={control}
                        errors={errors}
                        label={'Дата и время'}
                    />
                </AppFormItem>
                <AppFormAction>
                    <AppLoadingButton
                        loading={isLoading}
                        submit={true}
                        disabled={!isDirty || !isValid}
                    >
                        Сохранить
                    </AppLoadingButton>
                </AppFormAction>
            </PageContentItem>
        </form>
    )
}

const RequestInfo: FC<CustomerRequestFormProps> = ({formStore}) => {

    const {
        control,
        register,
        formState: {
            isDirty,
            isValid,
            errors
        },
        handleSubmit,
        resetField,
        setError,
    } = useForm({mode: 'onChange'})

    const {
        onSubmit,
        isLoading
    } = useSubmitForm<ICustomerRequest>({
        submitCallback: formData => CustomerRequestService.saveInfoByCustomerRequestId(formStore.customerRequest?.id, formData),
        success: responseData => formStore.customerRequest?.update(responseData),
        setError
    })

    Valid.requiredMinMaxLength(register, 'info', 1, 2000)

    useEffect(() => {
        resetField('info', {defaultValue: formStore.customerRequest?.info})
    }, [formStore.customerRequest?.info])

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <PageContentItem>
                <AppFormHeader
                    text={'Дополнительная информация по заявке'}
                />
                <AppFormItem>
                    <AppTextFiledController
                        name={'info'}
                        control={control}
                        errors={errors}
                        label={'Дополнительная информация'}
                        rows={6}
                    />
                </AppFormItem>
                <AppFormAction>
                    <AppLoadingButton
                        loading={isLoading}
                        submit={true}
                        disabled={!isDirty || !isValid}
                    >
                        Сохранить
                    </AppLoadingButton>
                </AppFormAction>
            </PageContentItem>
        </form>
    )
}

const RequestHistory: FC<CustomerRequestFormProps> = ({formStore}) => {

    const {
        control,
        register,
        formState: {
            isDirty,
            isValid,
            errors
        },
        reset,
        setError,
        handleSubmit
    } = useForm({mode: 'onChange'})

    const {
        onSubmit,
        isLoading
    } = useSubmitForm<ICustomerRequest>({
        submitCallback: formData => CustomerRequestService.saveNewEventByCustomerRequestId(formStore.customerRequest?.id, formData),
        success: responseData => {
            formStore.customerRequest?.update(responseData)
            reset()
        },
        setError
    })

    register('event', {...Valid.required})

    const columns = ['Дата время', 'Событие']

    return (
        <PageContentItem>
            <AppFormHeader
                text={'События по заявке'}
            />
            <AppFormItem>
                <AppTable
                    columns={columns}
                    rows={formStore.customerRequest?.histories || []}
                    renderRow={(historyItem) =>
                        <TableRow
                            key={`historyItem_${historyItem.id}`}
                        >
                            <TableCell>
                                <Typography
                                    variant={'body1'}
                                >
                                    {historyItem.dateTime}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant={'body1'}
                                    color={createColorByEvent(historyItem.event)}
                                >
                                    {historyItem.event.title}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    }
                />
            </AppFormItem>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <AppFormItem>
                    <AppTextFieldController
                        name={'event'}
                        control={control}
                        errors={errors}
                        label={'Добавить новое событие'}
                        select={true}
                        options={formStore.customerRequestEvents}
                        renderOption={(option) =>
                            <MenuItem
                                key={`customerRequestEvent${option.value}`}
                                value={option.value}
                            >
                                {option.title}
                            </MenuItem>
                        }
                    />
                </AppFormItem>
                <AppFormAction>
                    <AppLoadingButton
                        loading={isLoading}
                        submit={true}
                        disabled={!isDirty || !isValid}
                    >
                        Сохранить
                    </AppLoadingButton>
                </AppFormAction>
            </form>
        </PageContentItem>
    )
}

const CustomerRequestForm: FC<CustomerRequestFormProps> =
    ({
         formStore
     }) => {
        return (
            <React.Fragment>
                <PersonData formStore={formStore}/>
                <RequestCoaching formStore={formStore}/>
                <RequestCall formStore={formStore}/>
                <RequestInfo formStore={formStore}/>
                <RequestHistory formStore={formStore}/>
            </React.Fragment>
        );
    };

export default CustomerRequestForm;