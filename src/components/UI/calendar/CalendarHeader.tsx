import React, {FC} from "react";
import classes from './index.module.css'
import {Box, Button, Divider, IconButton, PaletteMode} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Heading} from "../typography/Typography";

interface CalendarHeaderProps {
    mode?: PaletteMode,
    changeMode?: () => void,
    handlePrevMonth: () => void,
    handleNextMonth: () => void,
    handleReset: () => void,
    currentMonthTextFormat: string
    title?: string
}

const CalendarHeader: FC<CalendarHeaderProps> =
    ({
         mode,
         changeMode,
         handleNextMonth,
         handlePrevMonth,
         handleReset,
         currentMonthTextFormat,
         title
     }) => {

        return (
            <Box
                className={classes.header}
            >
                <Box
                    className={classes.title}
                >
                    <Heading>
                        {title}
                    </Heading>
                </Box>
                <Divider/>
                <Box
                    className={classes.buttonGroup}
                >
                    <Box
                        className={classes.todayButton}
                    >
                        <Button
                            variant={'outlined'}
                            sx={{borderRadius: '16px'}}
                            onClick={handleReset}
                        >
                            Сегодня
                        </Button>
                    </Box>
                    <Box
                        className={classes.monthText}
                    >
                        <Heading>
                            {currentMonthTextFormat}
                        </Heading>
                    </Box>
                    <Box
                        className={classes.monthButtons}
                    >
                        <IconButton
                            color={'primary'}
                            onClick={handlePrevMonth}

                        >
                            <ArrowLeftIcon
                                fontSize={'large'}
                            />
                        </IconButton>
                        <IconButton
                            color={'primary'}
                            onClick={handleNextMonth}
                        >
                            <ArrowRightIcon
                                fontSize={'large'}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        );
    }

export default CalendarHeader;
