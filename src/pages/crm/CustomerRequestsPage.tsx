import React, {FC, useEffect, useState} from 'react';
import {Box, Container, Pagination} from "@mui/material";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import {CustomerRequestStore} from "../../store/customer-request/CustomerRequestStore";
import CustomerRequestTable from "../../components/crm/customer-request/CustomerRequestTable";
import {observer} from "mobx-react-lite";
import CustomerRequestFilter from "../../components/crm/customer-request/CustomerRequestFilter";
import useModal from "../../hooks/useModal";
import {ICustomerRequest} from "../../model/customer/CustomerRequest";
import CustomerRequestDialog from "../../components/crm/customer-request/CustomerRequestModal";
import {CustomerRequestFormStore} from "../../store/customer-request/CustomerRequestFormStore";

const CustomerRequestsPage: FC = observer(() => {

    const [customerRequestStore] = useState(() => new CustomerRequestStore())
    const [customerRequestFormStore] = useState(() => new CustomerRequestFormStore())
    const customerRequestModal = useModal()

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        jumpUp()
        customerRequestStore.filter.setPage(page)
        customerRequestStore.fetch()
    }

    const handleOnClickFilter = () => {
        jumpUp()
        customerRequestStore.fetchFilter()
    }

    const handleOnClickResetFilter = () => {
        jumpUp()
        customerRequestStore.reset()
    }

    const jumpUp = () => {
        const element = document.getElementById('AppWrapper')
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    const handleClickTableRow = (customerRequest: ICustomerRequest) => {
        customerRequestFormStore.setCustomerRequest(customerRequest)
        customerRequestModal.handleOpen()
    }

    useEffect(() => {
        if (!customerRequestStore.isLoading) {
            customerRequestFormStore.fetchEvents()
            customerRequestStore.fetchEvents()
            customerRequestStore.fetch()
        }
    }, [])

    return (
        <React.Fragment>
            <Container
                maxWidth={'xl'}
                sx={{minHeight: '100%', display: 'flex', flexDirection: 'row', flex: 1}}
            >
                <Box
                    sx={{flex: 1, marginTop: '50px', marginBottom: '50px', marginRight: '10px'}}
                >
                    <PageContentItem
                        sx={{position: 'sticky', top: '50px'}}
                    >
                        <CustomerRequestFilter
                            filter={customerRequestStore.filter}
                            fetchFilter={() => handleOnClickFilter()}
                            reset={() => handleOnClickResetFilter()}
                        />
                    </PageContentItem>
                </Box>
                <Box
                    sx={{flex: 4, marginTop: '25px', marginBottom: '50px'}}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        padding={'25px 0'}
                    >
                        <Pagination
                            page={customerRequestStore.filter.page}
                            count={customerRequestStore.data?.totalPages}
                            onChange={handleChangePage}
                            size={'large'}
                            color={'primary'}
                        />
                    </Box>
                    <PageContentItem
                        sx={{height: '100%'}}
                    >
                        <CustomerRequestTable
                            requests={customerRequestStore.data?.content || []}
                            isLoading={customerRequestStore.isLoading}
                            handleClickTableRow={handleClickTableRow}
                        />
                    </PageContentItem>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        padding={'20px 0'}
                    >
                        <PageContentItem
                            sx={{padding: '5px'}}
                        >
                            <Pagination
                                page={customerRequestStore.filter.page}
                                count={customerRequestStore.data?.totalPages}
                                onChange={handleChangePage}
                                size={'large'}
                                color={'primary'}
                            />
                        </PageContentItem>
                    </Box>
                </Box>
            </Container>
            <CustomerRequestDialog
                isOpen={customerRequestModal.isOpen}
                handleClose={customerRequestModal.handleClose}
                formStore={customerRequestFormStore}
            />
        </React.Fragment>
    );
});

export default CustomerRequestsPage;