import React from 'react';
import {Box, Typography} from "@mui/material";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <Box
            className={classes.footer}
            bgcolor={'background.paper'}
            color={'text.secondary'}
        >
            <Typography
                variant={'subtitle2'}
            >
                © 2022, Фитнес центр Спартак
            </Typography>
        </Box>
    );
};

export default Footer;