import React, {FC, useEffect, useState} from 'react';
import {Container} from "@mui/material";
import {useParams} from 'react-router-dom'
import {IPage} from "../../model/Page";
import {ICoachTransaction} from "../../model/coach/CoachTransaction";
import Card from "@mui/material/Card";
import {CoachTransactionService} from "../../service/CoachTransactionService";
import {ProfileCoachTransactionStore} from "../../store/coach/ProfileCoachTransactionStore";
import {ProfileParams, useProfile} from "../../context/ProfileContext";
import {observer} from "mobx-react-lite";
import AppCard from "../../components/UI/page-content/AppCard";
import {Body, Heading, SubTitle} from "../../components/UI/typography/Typography";

const CoachTransactionsPage = () => {

    const params = useParams<ProfileParams>()
    const {person, fetchPerson} = useProfile()
    const [store] = useState<ProfileCoachTransactionStore>(() => new ProfileCoachTransactionStore())
    const [pages, setPages] = useState<Array<IPage<ICoachTransaction>>>([])

    const init = async () => {
        const pages = await CoachTransactionService.getTransactionsByCoachId(96, 1, 25)
        setPages([pages.data])
    }

    useEffect(() => {
        fetchPerson(params.personId)
    }, [])

    useEffect(() => {

        console.log('Person', person)
        console.log((person && person.isCoach && person.coachId))
        if (person && person.isCoach && person.coachId) {
            store.setCoachId(person.coachId)
            store.fetchBalance()
            store.fetchSumCreditByMonth(new Date())
        }
    }, [person])

    return (
        <Container>
            <AppCard>
                <Body isLoading={store.isLoadingBalance}>
                    {JSON.stringify(store.balance)}
                </Body>
            </AppCard>
            <AppCard>
                <Body isLoading={store.isLoadingSumCredit}>
                    {JSON.stringify(store.sumCredit)}
                </Body>
            </AppCard>
        </Container>
    );
};

export default observer(CoachTransactionsPage);