import React, {FC, useEffect, useState} from 'react';
import {Container} from "@mui/material";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import {observer} from "mobx-react-lite";
import {CoachStore} from "../../store/coach/CoachStore";
import CoachTable from "../../components/crm/coach/CoachTable";
import CoachNewTransactionModal from "../../components/crm/coach/CoachNewTransactionModal";
import useModal from "../../hooks/useModal";
import {CoachFull} from "../../model/coach/CoachFull";

const CoachPage: FC = observer(() => {

    // const [coachStore] = useState(() => new CoachStore())
    // const newTransactionModal = useModal()
    //
    // const handleNewTransaction = (coach: CoachFull) => {
    //     coachStore.setCurrentCoach(coach)
    //     newTransactionModal.handleOpen()
    // }
    //
    // useEffect(() => {
    //     if (!coachStore.isLoading) {
    //         coachStore.fetch()
    //     }
    // }, [])

    return (
        <React.Fragment>
            {/*<Container*/}
            {/*    sx={{minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1}}*/}
            {/*>*/}
            {/*    <PageContentItem*/}
            {/*        sx={{flex: 1, marginTop: '50px'}}*/}
            {/*    >*/}
            {/*        <CoachTable*/}
            {/*            coachList={coachStore.data || []}*/}
            {/*            isLoading={coachStore.isLoading}*/}
            {/*            handleNewTransaction={handleNewTransaction}*/}
            {/*        />*/}
            {/*    </PageContentItem>*/}
            {/*</Container>*/}
            {/*<CoachNewTransactionModal*/}
            {/*    coach={coachStore.currentCoach}*/}
            {/*    isOpen={newTransactionModal.isOpen}*/}
            {/*    handleClose={newTransactionModal.handleClose}*/}
            {/*/>*/}
        </React.Fragment>
    );
});

export default CoachPage;