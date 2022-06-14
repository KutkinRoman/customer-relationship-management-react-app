import React, {FC} from 'react';
import AppFullScreenDialog from "../../../UI/dialog/AppFullScreenDialog";
import PersonForm from "./PersonForm";
import {PersonFormStore} from "../../../../store/person/PersonFormStore";
import PageContentItem from "../../../UI/page-content/PageContentItem";

interface AppFullScreenDialogProps {
    isOpen: boolean
    handleClose: () => void
    personFormStore: PersonFormStore
}

const PersonFormDialog: FC<AppFullScreenDialogProps> =
    ({
         isOpen,
         handleClose,
         personFormStore
     }) => {
        return (
            <AppFullScreenDialog
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <PageContentItem>
                    <PersonForm
                        personFormStore={personFormStore}
                    />
                </PageContentItem>
            </AppFullScreenDialog>
        );
    };

export default PersonFormDialog;