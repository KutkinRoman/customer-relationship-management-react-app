import React, {useContext, useEffect} from 'react';
import {Container} from "@mui/material";
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
        <Container
            maxWidth={'xl'}
            sx={{
                marginTop: '25px',
                height: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CoachingTimeTable/>
        </Container>
    );
})

export default CoachingTimeTableCRMPage;