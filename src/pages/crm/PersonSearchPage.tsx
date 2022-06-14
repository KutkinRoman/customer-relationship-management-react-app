import React, {FC, useContext, useEffect, useState} from 'react';
import PersonSearchInput from "../../components/crm/person/search/PersonSearchInput";
import {Container} from "@mui/material";
import AdminPanel from "../../components/crm/admin-panel/AdminPanel";
import {FetchDataStore} from "../../store/FetchDataStore";
import {OrderService} from "../../service/OrderService";
import {observer} from "mobx-react-lite";
import {PersonSearchStore} from "../../store/person/PersonSearchStore";
import {useLocation, useNavigate} from 'react-router-dom'
import {AppPaths} from "../../router/AppPaths";
import {PersonResultSearch} from "../../model/person/PersonResultSearch";
import {VisitCurrent} from "../../types/types";
import {PersonFormContext} from "../../context/PersonFormContext";

const PersonSearchPage: FC = observer(() => {

    const navigation = useNavigate()
    const location = useLocation()
    const {initFormByPersonId, initFormNewPerson} = useContext(PersonFormContext)
    const [currentVisitsData] = useState(() => new FetchDataStore<VisitCurrent[]>([], OrderService.getCurrentVisits))
    const [personSearch] = useState(() => new PersonSearchStore())

    const handleOnChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        personSearch.setQuery(e.target.value)
        personSearch.fetch()
        navigation(personSearch.query ? `?q=` + personSearch.query : '?')
    }

    const parseParams = () => {
        if (location.search) {
            const searchParams = new URLSearchParams(location.search)
            personSearch.setQuery(searchParams.get('q') || '')
            personSearch.fetch()
        }
    }

    const registrationNoName = () => {
        navigation(AppPaths.registration)
    }

    const handleRegistrationByPerson = (person: PersonResultSearch) => {
        navigation(AppPaths.registration + '/' + person.id)
    }

    useEffect(() => {
        parseParams()
        if (!currentVisitsData.isLoading) {
            currentVisitsData.fetch()
        }
    }, [])

    return (
        <Container
            sx={{minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1}}
        >
            <PersonSearchInput
                query={personSearch.query}
                handleOnChangeSearch={handleOnChangeSearch}
                persons={personSearch.data || []}
                handleRegistrationByPerson={handleRegistrationByPerson}
                handleFormByPerson={person => initFormByPersonId(person.id)}
            />
            <AdminPanel
                visits={currentVisitsData.data || []}
                isLoadingVisits={currentVisitsData.isLoading}
                registrationNoName={registrationNoName}
                handleNewPerson={initFormNewPerson}
            />
        </Container>
    );
});

export default PersonSearchPage;