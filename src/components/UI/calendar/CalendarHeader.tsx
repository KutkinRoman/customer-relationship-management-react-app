import React, {FC} from "react";
import classes from './index.module.css'
import {Box, Button, Divider, IconButton, PaletteMode, Typography} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AppModeSwitch from "../swith/AppModeSwitch";

interface CalendarHeaderProps {
    mode: PaletteMode,
    changeMode: () => void,
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
                    <Typography
                        variant={'h6'}
                        color={'primary.main'}
                    >
                        {title}
                    </Typography>
                </Box>
                <Divider/>
                <Box
                    className={classes.buttonGroup}
                >
                    <Box
                        className={classes.todayButton}
                    >
                        <Button
                            variant={'contained'}
                            sx={{borderRadius: '16px'}}
                            onClick={handleReset}
                        >
                            Сегодня
                        </Button>
                    </Box>
                    <Box
                        className={classes.monthText}
                    >
                        <Typography
                            variant={'subtitle2'}
                            color={'primary.main'}
                        >
                            {currentMonthTextFormat}
                        </Typography>
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
                    <AppModeSwitch
                        mode={mode}
                        changeMode={changeMode}
                    />
                </Box>
            </Box>
        );
    }

export default CalendarHeader;
