import {IEmployee} from "./Employee";

export interface IEmployeeHoursWorked {
    id: number
    date: string
    timeBegin: string
    timeEnd: string
    employee: IEmployee
}