import React, {useCallback} from 'react';
import CalendarModal from "../../UI/calendar/CalendarModal";
import dayjs from "dayjs";
import {IEmployeeHoursWorked} from "../../../model/employee/EmployeeHoursWorked";
import {IEmployee} from "../../../model/employee/Employee";
import {Box, Typography} from "@mui/material";
import useModal from "../../../hooks/useModal";
import AppTimePicker from "../../UI/date-time-picker/AppTimePicker";
import {HoursWorkedItemStyled} from "./styles";

interface EmployeeHoursWorkedModalProps {
    day: dayjs.Dayjs
    isOpen: boolean
    handleClose: () => void,
    hoursWorked?: IEmployeeHoursWorked[]
    employees: IEmployee[]
}

interface EmployeeHoursWorkedItemProps {
    employee: IEmployee
    hoursWorked?: IEmployeeHoursWorked
}

const EmployeeHoursWorkedItem = ({employee, hoursWorked}: EmployeeHoursWorkedItemProps) => {
    return (
        <HoursWorkedItemStyled>
            <Typography
                variant={'subtitle1'}
                color={'primary'}
                textAlign={'center'}
            >
                {employee.fullName}
            </Typography>
            <Box>
                <AppTimePicker
                    label={'Начало раб. дня'}
                    value={hoursWorked?.timeBegin}
                    setValue={() => {}}
                />
                <AppTimePicker
                    label={'Конец раб. дня'}
                    value={hoursWorked?.timeEnd}
                    setValue={() => {}}
                />
            </Box>
        </HoursWorkedItemStyled>
    )
}

const EmployeeHoursWorkedModal = (props: EmployeeHoursWorkedModalProps) => {

    const {
        day,
        isOpen,
        handleClose,
        hoursWorked,
        employees
    } = props

    const hoursWorkedByEmployee = useCallback((employee: IEmployee) => {
        if (hoursWorked){
            const filter = hoursWorked.filter(item => item.employee.id === employee.id)
            if (filter){
                return filter[0]
            }
            return undefined
        }
        return undefined
    }, [hoursWorked])

    return (
        <CalendarModal
            day={day}
            isOpen={isOpen}
            handleClose={handleClose}
        >
            {employees.map(employee =>
                <EmployeeHoursWorkedItem
                    key={employee.id}
                    employee={employee}
                    hoursWorked={hoursWorkedByEmployee(employee)}
                />
            )}
        </CalendarModal>
    );
};

export default EmployeeHoursWorkedModal;