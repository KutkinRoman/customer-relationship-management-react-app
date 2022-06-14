import React, {useContext, useEffect} from 'react';
import {Box} from "@mui/material";
import CoachingTimeTable from "../../components/crm/coach/CoachingTimeTable";
import {CoachingContext} from "../../context/CoachingContext";
import {CoachingTimeTableContext} from "../../context/CoachingTimeTableContext";
import {observer} from "mobx-react-lite";

const CoachingTimeTableCRMPage = observer(() => {

    const coachingDirectionStore = useContext(CoachingContext)
    const coachingTimeTableStore = useContext(CoachingTimeTableContext)

    const resetTimeTable = () => {
        coachingTimeTableStore?.setMessage(undefined)
        coachingDirectionStore?.setCurrentDirectionById(undefined)
    }

    useEffect(() => {
        resetTimeTable()
    }, [])

    return (
        <Box
            sx={{
                marginTop: '25px',
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
})

export default CoachingTimeTableCRMPage;