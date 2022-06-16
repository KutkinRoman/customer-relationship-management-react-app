import React from 'react';
import {Box} from "@mui/material";
import classes from './Footer.module.css'
import {SubTitle} from "../typography/Typography";

const Footer = () => {
    return (
        <Box
            className={classes.footer}
            bgcolor={'background.paper'}
            borderTop={'1px solid'}
            borderColor={'divider'}
        >
            <SubTitle>
                © 2022, Фитнес центр Спартак
            </SubTitle>
        </Box>
    );
};

export default Footer;