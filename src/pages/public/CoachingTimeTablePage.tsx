import React from 'react';
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import CoachingTimeTable from "../../components/crm/coach/CoachingTimeTable";
import Iframe from "react-iframe";

const CoachingTimeTablePage = observer(() => {

    return (
        <Box
            sx={{
                marginTop: '50px',
                height: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '0 50px'
            }}
        >
            <Iframe
                url={'https://blog.bitsrc.io/best-practices-in-using-iframes-with-react-6193feaa1e08'}
                width={'450px'}
                height={'450px'}
            />
            <Iframe
                url={'http://spartak-fitnes.ru/login'}
                width={'450px'}
                height={'450px'}
            />
            <Iframe
                url={'https://www.google.ru/'}
                width={'450px'}
                height={'450px'}
            />
            <Iframe
                url={'https://vk.com/'}
                width={'450px'}
                height={'450px'}
            />
            {/*<CoachingTimeTable/>*/}
        </Box>
    );
});

export default CoachingTimeTablePage;