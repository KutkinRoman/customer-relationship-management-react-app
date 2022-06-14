import React from 'react';
import Wrapper from "../../components/UI/wrapper/Wrapper";
import PageContent from "../../components/UI/page-content/PageContent";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import NewCustomerRequestsForm from "../../components/crm/customer-request/NewCustomerRequestsForm";

const NewCustomerRequestsPage = () => {
    return (
        <Wrapper>
            <PageContent
                sx={{
                    justifyContent: 'center'
                }}
            >
                <PageContentItem
                    sx={{
                        width: '650px',
                        margin: '0 auto'
                    }}
                >
                    <NewCustomerRequestsForm/>
                </PageContentItem>
            </PageContent>
        </Wrapper>
    );
};

export default NewCustomerRequestsPage;