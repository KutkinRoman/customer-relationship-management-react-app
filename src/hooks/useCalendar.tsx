import {useEffect, useMemo, useState} from "react";
import dayjs from "dayjs";
import locale from "../utils/calendar/ru";
import {getMonth} from "../utils/calendar/calendarUtil";

export const useCalendar = () => {

    // @ts-ignore
    dayjs.locale(locale, null, true)
    dayjs.locale('ru')

    const [updateDays, setUpdateDays] = useState<dayjs.Dayjs[]>([])

    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    const [currenMonthSmall, setCurrentMonthSmall] = useState(getMonth());
    const [monthIndexSmall, setMonthIndexSmall] = useState(dayjs().month());

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }

    function handlePrevMonthSmall() {
        setMonthIndexSmall(monthIndexSmall - 1);
    }

    function handleNextMonthSmall() {
        setMonthIndexSmall(monthIndexSmall + 1);
    }

    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }

    function selectedMonthCalendarSmall() {
        setMonthIndex(monthIndexSmall)
    }

    function addUpdateDay(day: dayjs.Dayjs) {
        setUpdateDays([...updateDays, day])
    }

    function removeUpdateDay(day: dayjs.Dayjs) {
        setUpdateDays([...updateDays.filter(d => d !== day)])
    }

    function updateMonth() {
        getMonth(monthIndex).forEach(days =>
            setUpdateDays([...updateDays, ...days])
        )
    }

    function currentMonthISODataString() {
        return dayjs(new Date(dayjs().year(), monthIndex)).format('YYYY-MM-DD')
    }

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
        setMonthIndexSmall(monthIndex)
    }, [monthIndex]);

    useEffect(() => {
        setCurrentMonthSmall(getMonth(monthIndexSmall));
    }, [monthIndexSmall]);

    const currentMonthNumber = useMemo(() => {
        return new Date(dayjs().year(), monthIndex).getMonth()
    }, [monthIndex])

    const currentMonthTextFormat = useMemo(() => {
        return dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
        ).toUpperCase()
    }, [monthIndex])

    const currentMonthNumberSmall = useMemo(() => {
        return new Date(dayjs().year(), monthIndexSmall).getMonth()
    }, [monthIndexSmall])

    const currentMonthSmalTextFormat = useMemo(() => {
        return dayjs(new Date(dayjs().year(), monthIndexSmall)).format(
            "MMMM YYYY"
        ).toUpperCase()
    }, [monthIndexSmall])


    return {
        currenMonth,
        setCurrentMonth,
        monthIndex,
        setMonthIndex,
        currentMonthNumber,
        handleNextMonth,
        handlePrevMonth,
        handleReset,
        currentMonthTextFormat,
        currenMonthSmall,
        setCurrentMonthSmall,
        monthIndexSmall,
        setMonthIndexSmall,
        currentMonthNumberSmall,
        handleNextMonthSmall,
        handlePrevMonthSmall,
        selectedMonthCalendarSmall,
        currentMonthSmalTextFormat,
        updateDays,
        addUpdateDay,
        removeUpdateDay,
        updateMonth,
        currentMonthISODataString
    }
}