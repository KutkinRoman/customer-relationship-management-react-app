import React from 'react';
import Wrapper from "../../components/UI/wrapper/Wrapper";
import {LinearProgress} from "@mui/material";

const LoadingPage = () => {
    return (
        <Wrapper>
            <LinearProgress color="secondary"/>
        </Wrapper>
    );
};

export default LoadingPage;