import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import {Params, useParams} from 'react-router-dom'
import {RegistrationStore} from "../../store/RegistrationStore";
import RegistrationHeader from "../../components/crm/person/registration/RegistrationHeader";
import {observer} from "mobx-react-lite";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import ProductsTabsSimp from "../../components/crm/product/ProductsTabsSimp";
import {ProductStore} from "../../store/ProductStore";

interface PersonRegistrationParams extends Params {
    // @ts-ignore
    readonly personId: number | undefined;
}

const PersonRegistrationPage = observer(() => {

    const {personId} = useParams<PersonRegistrationParams>()
    const [productStore] = useState(() => new ProductStore())
    const [registrationStore] = useState(() => new RegistrationStore())

    useEffect(() => {
        if (personId && !registrationStore.isInit) {
            registrationStore.initPersonById(personId)
        }
        if (!productStore.isLoading) {
            productStore.fetch()
        }
    }, [])

    return (
        <Container
            maxWidth={'xl'}
            sx={{display: 'flex', flexDirection: 'column', flex: 1}}
        >
            <PageContentItem
                sx={{marginTop: '15px'}}
            >
                <RegistrationHeader
                    personStore={registrationStore.personStore}
                />
            </PageContentItem>
            <Box
                sx={{display: 'flex', flexDirection: 'row', flex: 1, marginTop: '25px'}}
            >
                <PageContentItem
                    sx={{flex: 3}}
                >
                    <ProductsTabsSimp
                        categories={productStore.data || []}
                        isLoading={productStore.isLoading}
                    />
                </PageContentItem>
                <Box
                    sx={{display: 'flex', flexDirection: 'row', flex: 1}}
                >

                </Box>
            </Box>
        </Container>
    );
});

export default PersonRegistrationPage;