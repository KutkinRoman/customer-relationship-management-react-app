import dayjs from "dayjs";
import React, {FC} from "react";
import classes from "./index.module.css";
import {Box, Button, IconButton, Typography, Zoom} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Card from "@mui/material/Card";
import {SubTitle} from "../../typography/Typography";

interface SmallCalendarProps {
    currentMonth: dayjs.Dayjs[][],
    currentMonthNumber: number,
    handlePrevMonth: () => void,
    handleNextMonth: () => void,
    selectedMonth: () => void,
    currentMonthTextFormat: string,
}

const SmallCalendar: FC<SmallCalendarProps> =
    ({
         currentMonth,
         currentMonthNumber,
         handlePrevMonth,
         handleNextMonth,
         selectedMonth,
         currentMonthTextFormat
     }) => {

        return (
            <div
                className={classes.container}
            >
                <header
                    className={classes.header}
                >
                    <Box
                        className={classes.monthText}
                    >
                        <SubTitle>
                            {currentMonthTextFormat}
                        </SubTitle>
                    </Box>
                    <Box
                        className={classes.buttonGroup}
                    >
                        <IconButton
                            color={'primary'}
                            onClick={handlePrevMonth}

                        >
                            <ArrowLeftIcon
                                fontSize={'small'}
                            />
                        </IconButton>
                        <IconButton
                            color={'primary'}
                            onClick={handleNextMonth}
                        >
                            <ArrowRightIcon
                                fontSize={'small'}
                            />
                        </IconButton>
                    </Box>
                </header>
                <div
                    className={classes.month}
                >
                    <Card>
                        <div
                            className={classes.week}
                        >
                            {currentMonth[0].map((day, i) => (
                                <Typography
                                    key={i}
                                    className={classes.day}
                                    color={'text.disabled'}
                                    variant={'subtitle2'}
                                >
                                    {day.format("dd").toUpperCase()}
                                </Typography>
                            ))}
                        </div>
                        {currentMonth.map((row, i) => (
                            <div
                                className={classes.week}
                                key={i}
                            >
                                {row.map((day, idx) => (
                                    <Zoom
                                        key={`daySmall_${day.toISOString()}`}
                                        in={true}
                                    >
                                        <Button
                                            onClick={selectedMonth}
                                            sx={{
                                                margin: '1px',
                                                padding: 0,
                                                maxWidth: '30px',
                                                minWidth: '30px',
                                                opacity: day.month() === currentMonthNumber ? '1' : '0.5'
                                            }}
                                            variant={
                                                day.format("DD.MM.YYYY") === dayjs().format('DD.MM.YYYY')
                                                    ? 'contained'
                                                    : 'outlined'
                                            }
                                            color={'inherit'}
                                        >
                                            {day.format("DD")}
                                        </Button>
                                    </Zoom>
                                ))}
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        );
    }

export default SmallCalendar;
