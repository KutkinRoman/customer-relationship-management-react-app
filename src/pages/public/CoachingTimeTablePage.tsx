import React from 'react';
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import CoachingTimeTable from "../../components/crm/coach/CoachingTimeTable";

const CoachingTimeTablePage = observer(() => {

    return (
        <Box
            sx={{
                marginTop: '50px',
                height: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '0 50px'
            }}
        >
            <CoachingTimeTable/>
        </Box>
    );
});

export default CoachingTimeTablePage;