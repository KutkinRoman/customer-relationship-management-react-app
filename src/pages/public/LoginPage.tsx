import React from 'react';
import Wrapper from "../../components/UI/wrapper/Wrapper";
import PageContent from "../../components/UI/page-content/PageContent";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import LoginForm from "../../components/public/login/LoginForm";

const LoginPage = () => {
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
                    <LoginForm/>
                </PageContentItem>
            </PageContent>
        </Wrapper>
    );
};

export default LoginPage;