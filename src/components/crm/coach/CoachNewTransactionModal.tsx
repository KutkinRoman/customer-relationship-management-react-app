import React, {FC, useState} from 'react';
import {AppModal, AppModalProps} from "../../UI/modal/AppModal";
import {Box, MenuItem} from "@mui/material";
import AppButton from "../../UI/button/AppButton";
import {AppTextField} from "../../UI/form/AppTextField";
import AppFormItem from "../../UI/form/AppFormItem";
import {useForm} from "react-hook-form";
import AppTextFiledController from "../../UI/form/AppTextFiledController";
import {CoachFull} from "../../../model/coach/CoachFull";

interface CoachNewTransactionModalProps extends AppModalProps {
    coach: CoachFull | undefined
}

const paymentMethod = [
    {
        value: 'CASH',
        label: 'Наличными',
    },
    {
        value: 'NON_CASH',
        label: 'Безнал',
    }
];

const CoachNewTransactionModal: FC<CoachNewTransactionModalProps> =
    ({
         isOpen,
         handleClose,
         coach
     }) => {


        const [value, setValue] = useState('')

        const transactionForm = useForm()

        function handleNewTransaction(data: any) {
            console.dir(data)
        }

        return (
            <AppModal
                isOpen={isOpen}
                handleClose={handleClose}
                title={'Списание с баланса тренера'}
                renderFooter={
                    <React.Fragment>
                        <AppButton
                            color={'inherit'}
                            onClick={handleClose}
                        >
                            Отмена
                        </AppButton>
                        <AppButton
                            color={'info'}
                            submit={true}
                        >
                            Сохранить
                        </AppButton>
                    </React.Fragment>
                }
            >
                <form
                    onSubmit={transactionForm.handleSubmit(handleNewTransaction)}
                >
                    <Box
                        width={'500px'}
                    >
                        <AppFormItem>
                            <AppTextField
                                readOnly={true}
                                label={'ФИО'}
                                value={coach?.fullName}
                            />
                        </AppFormItem>
                        <AppFormItem>
                            <AppTextField
                                readOnly={true}
                                color={'success'}
                                label={'Остаток'}
                                type={'number'}
                                value={coach?.balance}
                            />
                        </AppFormItem>
                        <AppFormItem>
                            <AppTextFiledController
                                control={transactionForm.control}
                                errors={transactionForm.formState.errors}
                                name={'sumTransaction'}
                                label={'Сумма к списанию'}
                                type={'number'}
                            />
                        </AppFormItem>
                        <AppFormItem>
                            <AppTextFiledController
                                control={transactionForm.control}
                                errors={transactionForm.formState.errors}
                                name={'paymentMethod'}
                                label={'Способ перечисления'}
                                select={true}
                                options={paymentMethod}
                                renderOption={option =>
                                    <MenuItem
                                        key={`paymentMethodItem${option.value}`}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                }
                                value={value}
                            />
                        </AppFormItem>
                        <AppButton
                            color={'info'}
                            submit={true}
                        >
                            Сохранить
                        </AppButton>
                    </Box>
                </form>
            </AppModal>
        );
    };

export default CoachNewTransactionModal;