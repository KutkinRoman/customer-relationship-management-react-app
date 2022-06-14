import React, {FC, useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import {CashTransactionStore} from "../../store/CashTransactionStore";
import CashBookTable from "../../components/crm/cash-book/CashBookTable";
import {observer} from "mobx-react-lite";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import CashBookPanel from "../../components/crm/cash-book/CashBookPanel";

const CashPage: FC = observer(() => {

    const [cashTransactionStore] = useState(() => new CashTransactionStore())

    useEffect(() => {
        if (!cashTransactionStore.isLoading) {
            cashTransactionStore.fetch()
        }
    }, [])

    return (
        <Container
            maxWidth={'xl'}
            sx={{minHeight: '100%', display: 'flex', flexDirection: 'row', flex: 1}}
        >
            <Box
                sx={{flex: 1, marginTop: '50px', marginRight: '10px', minHeight: '100%'}}
            >
                <PageContentItem
                    sx={{position: 'sticky', top: '50px'}}
                >
                    <CashBookPanel
                        cashBook={cashTransactionStore.data}
                        isLoading={cashTransactionStore.isLoading}
                    />
                </PageContentItem>
            </Box>
            <PageContentItem
                sx={{flex: 2, marginTop: '50px', minHeight: '100%'}}
            >
                <CashBookTable
                    transactions={cashTransactionStore.data?.transactions}
                    isLoading={cashTransactionStore.isLoading}
                />
            </PageContentItem>
        </Container>
    );
});

export default CashPage;