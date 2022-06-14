import React, {FC} from 'react';
import PageContentItem from "../../UI/page-content/PageContentItem";
import AdminButtonGroup from "./AdminButtonGroup";
import classes from './index.module.css'
import CurrentVisitsTable from "../current-visits-table/CurrentVisitsTable";
import {VisitCurrent} from "../../../types/types";
import {observer} from "mobx-react-lite";

interface AdminPanelProps {
    visits: VisitCurrent[]
    isLoadingVisits: boolean

    registrationNoName(): void

    handleNewPerson(): void
}

const AdminPanel: FC<AdminPanelProps> = observer(
    ({
         visits,
         isLoadingVisits,
         registrationNoName,
         handleNewPerson
     }) => {

        return (
            <PageContentItem
                className={classes.container}
                sx={{flex: 1, marginTop: '150px'}}
            >
                <AdminButtonGroup
                    registrationNoName={registrationNoName}
                    handleNewPerson={handleNewPerson}
                />
                <CurrentVisitsTable
                    visits={visits}
                    isLoading={isLoadingVisits}
                />
            </PageContentItem>
        );
    });

export default AdminPanel;