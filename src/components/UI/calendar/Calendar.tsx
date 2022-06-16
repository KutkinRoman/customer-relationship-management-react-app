import React, {FC, useContext} from 'react';
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import classes from './index.module.css'
import {useCalendar} from "../../../hooks/useCalendar";
import {Box} from "@mui/material";
import dayjs from "dayjs";
import {CalendarThemeContext} from "../../../context/CalendarThemeContext";

interface CalendarProps {
    title?: string
    renderSideBar?: (updateMonth: () => void, currentMonthISODataString: () => string) => React.ReactNode,
    renderDayContent?: (day: dayjs.Dayjs, updateDays: dayjs.Dayjs[]) => React.ReactNode
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
        currentMonthSmalTextFormat,
        updateDays,
        updateMonth,
        currentMonthISODataString,
    } = useCalendar()

    return (
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
                />
                <div
                    className={classes.container}
                >
                    <Sidebar
                        currentMonthISODataString={currentMonthISODataString}
                        updateMonth={updateMonth}
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
                        updateDays={updateDays}
                        currentMonthNumber={currentMonthNumber}
                        renderDayContent={renderDayContent}
                    />
                </div>
            </div>
        </Box>
    );
};

export default Calendar;