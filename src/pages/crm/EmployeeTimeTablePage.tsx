import React from 'react';
import {Container} from "@mui/material";
import EmployeeTimeTable from "../../components/crm/employee/EmployeeTimeTable";

const EmployeeTimeTablePage = () => {
    return (
        <Container
            maxWidth={'xl'}
            sx={{
                marginTop: '25px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <EmployeeTimeTable/>
        </Container>
    );
};

export default EmployeeTimeTablePage;