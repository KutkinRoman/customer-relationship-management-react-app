import * as React from 'react';
import {FC} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import AppButton from "../button/AppButton";
import PageContentItem from "../page-content/PageContentItem";

interface AppQuestionDialogProps {
    isOpen: boolean,
    handleClose: () => void
    title: string,
    handleSuccess: () => void
    handleNegative: () => void
}

const AppQuestionDialog: FC<AppQuestionDialogProps> =
    ({
         isOpen,
         handleClose,
         title,
         handleSuccess,
         handleNegative
     }) => {


        function negative() {
            handleSuccess()
            handleClose()
        }

        function success() {
            handleNegative()
            handleClose()
        }

        return (
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <PageContentItem>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogActions>
                        <AppButton
                            onClick={negative}
                            color={'error'}
                        >
                            Нет
                        </AppButton>
                        <AppButton
                            onClick={success}
                            color={'success'}
                        >
                            Да
                        </AppButton>
                    </DialogActions>
                </PageContentItem>
            </Dialog>
        );
    };

export default AppQuestionDialog;