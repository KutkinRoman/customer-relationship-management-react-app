import React, {FC} from 'react';
import AppFullScreenDialog from "../../UI/dialog/AppFullScreenDialog";
import {CustomerRequestFormStore} from "../../../store/customer-request/CustomerRequestFormStore";
import CustomerRequestForm from "./CustomerRequestForm";
import {observer} from "mobx-react-lite";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";

interface CustomerRequestDialogProps {
    isOpen: boolean
    handleClose: () => void
    formStore: CustomerRequestFormStore
}

const CustomerRequestDialog: FC<CustomerRequestDialogProps> = observer(
    ({
         isOpen,
         handleClose,
         formStore
     }) => {
        return (
            <AppFullScreenDialog
                title={`Заявка №${formStore.customerRequest?.id} от ${DateTimeUtils.toDDmmYYYYmmHH(formStore.customerRequest?.createDateTime)}. ${formStore.customerRequest?.currentStatus.title}`}
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <CustomerRequestForm
                    formStore={formStore}
                />
            </AppFullScreenDialog>
        );
    });

export default CustomerRequestDialog;