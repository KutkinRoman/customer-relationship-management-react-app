import React, {FC} from 'react';
import AppButton from "../../UI/button/AppButton";
import classes from './index.module.css'
import AppButtonGroup from "../../UI/button/AppButtonGroup";

interface AdminButtonGroupProps {
    registrationNoName(): void

    handleNewPerson(): void
}

const AdminButtonGroup: FC<AdminButtonGroupProps> = ({registrationNoName, handleNewPerson}) => {
    return (
        <AppButtonGroup
            className={classes.buttonGroup}
        >
            <AppButton
                fullWidth={true}
            >
                Скрыть список клиентов
            </AppButton>
            <AppButton
                fullWidth={true}
                tooltipTitle={'Провести операцию анонимному клиенту'}
                onClick={registrationNoName}
            >
                Анонимный клиент
            </AppButton>
            <AppButton
                fullWidth={true}
                tooltipTitle={'Добавить нового клиента'}
                onClick={handleNewPerson}
            >
                Новый клиент
            </AppButton>
        </AppButtonGroup>
    );
};

export default AdminButtonGroup;