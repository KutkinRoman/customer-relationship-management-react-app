import React from 'react';
import {Container} from "@mui/material";
import {Heading} from "../../components/UI/typography/Typography";
import AppCard from "../../components/UI/page-content/AppCard";

const NotFoundPage = () => {
    return (
        <Container style={{paddingTop: '5rem'}}>
            <AppCard sx={{padding: '1rem'}}>
                <Heading>
                    Страница не найдена...
                </Heading>
            </AppCard>
        </Container>
    );
};

export default NotFoundPage;