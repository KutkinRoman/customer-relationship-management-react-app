import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import classes from "./index.module.css"
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface DayItemProps {
    time?: string
    title?: string
    description?: string
    children?: React.ReactNode,
    onClick?: () => void,
    sx?: SxProps<Theme>;
    boxShadow?: number | 'none'
}

const DayItem: FC<DayItemProps> =
    ({
         time,
         title,
         description,
         sx,
         boxShadow,
         children,
     }) => {
        return (
            <Box
                className={classes.dayItem}
                sx={sx}
                boxShadow={boxShadow || 1}
            >
                <Typography
                    variant={'subtitle2'}
                    color={'primary.main'}
                >
                    {time}
                </Typography>
                <Box
                    className={classes.dayItemContent}
                >
                    <Typography
                        variant={'subtitle2'}
                        color={'secondary.main'}
                        fontSize={'10px'}
                        textAlign={'end'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant={'caption'}
                        color={'text.secondary'}
                        fontSize={'8px'}
                        textAlign={'end'}
                    >
                        {description}
                    </Typography>
                </Box>
                {children}
            </Box>
        );
    };

export default DayItem;