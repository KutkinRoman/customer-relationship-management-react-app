import React, {useEffect, useState} from 'react';
import Calendar from "../../UI/calendar/Calendar";
import dayjs from "dayjs";
import {IEmployeeHoursWorked} from "../../../model/employee/EmployeeHoursWorked";
import {EmployeeService} from "../../../service/EmployeeService";
import {Box} from "@mui/material";
import DaySkeleton from "../../UI/calendar/DaySkeleton";
import DayItem from "../../UI/calendar/DayItem";
import EmployeeHoursWorkedModal from "./EmployeeHoursWorkedModal";
import useModal from "../../../hooks/useModal";
import {IEmployee} from "../../../model/employee/Employee";
import {useFetch} from "../../../hooks/useFetch";

interface DayContentProps {
    day: dayjs.Dayjs,
    updateDays: dayjs.Dayjs[]
    handleOnClick: (day: dayjs.Dayjs, hoursWorked?: IEmployeeHoursWorked[]) => void
}

const DayContent = ({day, updateDays, handleOnClick}: DayContentProps) => {

    const [isLoading, setIsLoading] = useState(true)
    const [hoursWorked, setHoursWorked] = useState<IEmployeeHoursWorked[]>([])

    const fetch = async () => {
        setIsLoading(true)
        try {
            const response = await EmployeeService.getHoursWorkedByDate(day.add(3, 'hours').toISOString().substring(0, 10))
            setHoursWorked(response.data)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <Box
            height={'100%'}
            width={'100%'}
            style={{cursor: 'pointer'}}
            onClick={() => handleOnClick(day, hoursWorked)}
        >
            {isLoading
                ?
                <DaySkeleton/>
                :
                <React.Fragment>
                    {hoursWorked.map(item =>
                        <DayItem
                            key={item.id}
                            time={`${item.timeBegin}-${item.timeEnd}`}
                            title={item.employee.compactName}
                        />
                    )}
                </React.Fragment>
            }
        </Box>
    )
}

const EmployeeTimeTable = () => {

    const {
        isOpen,
        handleOpen,
        handleClose,
    } = useModal()

    const {
        data: employees,
        fetching: fetchEmployees
    } = useFetch<IEmployee[]>(() => EmployeeService.getEmployees())

    const [currentDay, setCurrentDay] = useState<dayjs.Dayjs>()
    const [currentHoursWorked, setCurrentHoursWorked] = useState<IEmployeeHoursWorked[] | undefined>([])


    const handleOnClickDay = (day: dayjs.Dayjs, hoursWorked?: IEmployeeHoursWorked[]) => {
        setCurrentHoursWorked(hoursWorked)
        setCurrentDay(day)
        handleOpen()
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <React.Fragment>
            <Calendar
                title={'График работы'}
                renderDayContent={(day, updateDays) =>
                    <DayContent
                        day={day}
                        updateDays={updateDays}
                        handleOnClick={handleOnClickDay}
                    />
                }
            />
            {currentDay &&
                <EmployeeHoursWorkedModal
                    day={currentDay}
                    isOpen={isOpen}
                    handleClose={handleClose}
                    hoursWorked={currentHoursWorked}
                    employees={employees || []}
                />
            }
        </React.Fragment>
    );
};

export default EmployeeTimeTable;