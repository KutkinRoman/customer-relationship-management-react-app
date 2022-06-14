import React, {FC} from 'react';
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import classes from './index.module.css'
import {useCalendar} from "../../../hooks/useCalendar";
import {Box, ThemeProvider} from "@mui/material";
import dayjs from "dayjs";
import {useMode} from "../../../hooks/useMode";

interface CalendarProps {
    title?: string
    renderSideBar?: () => React.ReactNode,
    renderDayContent?: (day: dayjs.Dayjs) => React.ReactNode
}

const Calendar: FC<CalendarProps> = ({title, renderSideBar, renderDayContent}) => {

    const {
        currenMonth,
        currentMonthNumber,
        handleNextMonth,
        handlePrevMonth,
        handleReset,
        currentMonthTextFormat,
        currenMonthSmall,
        currentMonthNumberSmall,
        handleNextMonthSmall,
        handlePrevMonthSmall,
        selectedMonthCalendarSmall,
        currentMonthSmalTextFormat
    } = useCalendar()

    const {
        mode,
        theme,
        changeMode
    } = useMode('calendarMode')

    return (
        <ThemeProvider
            theme={theme}
        >
            <Box
                className={classes.wrapper}
                bgcolor={'background.paper'}
            >
                <div
                    className={classes.calendar}
                >
                    <CalendarHeader
                        handleNextMonth={handleNextMonth}
                        handlePrevMonth={handlePrevMonth}
                        handleReset={handleReset}
                        currentMonthTextFormat={currentMonthTextFormat}
                        title={title}
                        mode={mode}
                        changeMode={changeMode}
                    />
                    <div
                        className={classes.container}
                    >
                        <Sidebar
                            renderSideBar={renderSideBar}
                            currentMonth={currenMonthSmall}
                            currentMonthNumber={currentMonthNumberSmall}
                            handleNextMonth={handleNextMonthSmall}
                            handlePrevMonth={handlePrevMonthSmall}
                            selectedMonth={selectedMonthCalendarSmall}
                            currentMonthTextFormat={currentMonthSmalTextFormat}

                        />
                        <Month
                            month={currenMonth}
                            currentMonthNumber={currentMonthNumber}
                            renderDayContent={renderDayContent}
                        />
                    </div>
                </div>
            </Box>
        </ThemeProvider>
    );
};

export default Calendar;