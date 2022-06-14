import React, {FC} from 'react';
import {AppModal} from "../../../UI/modal/AppModal";
import CoachingTimeTable from "../../coach/CoachingTimeTable";
import {Box} from "@mui/material";

interface MessagesSessionsTimeTableProps {
    isOpen: boolean
    handleClose: () => void
}

const MessagesSessionsTimeTable: FC<MessagesSessionsTimeTableProps> = ({isOpen, handleClose}) => {
    return (
        <AppModal
            isOpen={isOpen}
            handleClose={handleClose}
        >
            <Box
                minHeight={'90vh'}
                minWidth={'90vw'}
                display={'flex'}
                flexDirection={'column'}
            >
                <CoachingTimeTable/>
            </Box>
        </AppModal>
    );
};

export default MessagesSessionsTimeTable;