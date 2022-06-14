import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import classes from "./index.module.css"
import Card from "@mui/material/Card";

interface DayItemProps {
    time?: string
    title?: string
    description?: string
    children?: React.ReactNode,
    onClick?: () => void
}

const DayItem: FC<DayItemProps> =
    ({
         time,
         title,
         description,
         children
     }) => {
        return (
            <Card
                className={classes.dayItem}
            >
                <Typography
                    variant={'subtitle2'}
                    color={'secondary.main'}
                >
                    {time}
                </Typography>
                <Box
                    className={classes.dayItemContent}
                >
                    <Typography
                        variant={'subtitle2'}
                        color={'primary.main'}
                        fontSize={'10px'}
                        textAlign={'end'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant={'body2'}
                        fontSize={'8px'}
                        textAlign={'end'}
                    >
                        {description}
                    </Typography>
                </Box>
                {children}
            </Card>
        );
    };

export default DayItem;