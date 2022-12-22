import {AUTH_API} from "./api";
import {IEmployeeHoursWorked} from "../model/employee/EmployeeHoursWorked";
import {IEmployee} from "../model/employee/Employee";

export class EmployeeService {

    public static async getEmployees() {
        return await AUTH_API.get<IEmployee[]>('/api/v1/employee')
    }

    public static async getHoursWorkedByDate(date: string) {
        return await AUTH_API.get<IEmployeeHoursWorked[]>('/api/v1/employee/hours-worked', {
            params: {
                date
            }
        })
    }
}