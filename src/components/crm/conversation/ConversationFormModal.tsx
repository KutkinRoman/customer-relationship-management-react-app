import React, {FC} from 'react';
import {ConversationFormStore} from "../../../store/conversation/ConversationFormStore";
import ConversationForm from "./ConversationForm";
import AppFullScreenDialog from "../../UI/dialog/AppFullScreenDialog";
import ConversationCard from "./ConversationCard";
import {Box} from "@mui/material";
import {ConversationMessage} from "../../../model/conversation/ConversationMessage";

interface ConversationFormModalProps {
    store: ConversationFormStore
    isOpen: boolean
    handleClose: () => void,
    handleOpenTimeTable: (message: ConversationMessage) => void
}

const ConversationFormModal: FC<ConversationFormModalProps> =
    ({
         store,
         isOpen,
         handleClose,
         handleOpenTimeTable
     }) => {
        return (
            <AppFullScreenDialog
                isOpen={isOpen}
                handleClose={handleClose}
                title={''}
            >
                <Box
                    paddingTop={'15px'}
                >
                    <ConversationCard
                        conversation={store.conversation}
                    />
                </Box>
                <Box
                    marginTop={'15px'}
                    paddingBottom={'15px'}
                >
                    <ConversationForm
                        store={store}
                        handleOpenTimeTable={handleOpenTimeTable}
                    />
                </Box>
            </AppFullScreenDialog>
        );
    };

export default ConversationFormModal;