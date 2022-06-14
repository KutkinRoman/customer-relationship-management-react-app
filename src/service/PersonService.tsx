import {AUTH_API} from "./api";
import {PersonFull} from "../model/person/PersonFull";
import {PersonResultSearch} from "../model/person/PersonResultSearch";

export class PersonService {

    public static async search(q: string) {
        return await AUTH_API.get<PersonResultSearch[]>(`/api/v1/persons/search`, {
            params: {
                q
            }
        })
    }

    public static async getPersonById(personId: number | undefined) {
        return await AUTH_API.get<PersonFull>(`/api/v1/persons/${personId}`)
    }

    public static async saveOrUpdate(data: any) {
        return await AUTH_API.post<PersonFull>(`/api/v1/persons`, data)
    }

    public static async updateOutMessageByPersonId(personId: number | undefined, isOutMessage: boolean) {
        return await AUTH_API.patch<PersonFull>(`/api/v1/persons/${personId}/out-message`, {}, {
            params: {
                isOutMessage
            }
        })
    }

    public static async updateCoachByPersonId(personId: number | undefined, isCoach: boolean) {
        return await AUTH_API.patch<PersonFull>(`/api/v1/persons/${personId}/coach`, {}, {
            params: {
                isCoach
            }
        })
    }

    public static async updateEmployeeByPersonId(personId: number | undefined, isEmployee: boolean) {
        return await AUTH_API.patch<PersonFull>(`/api/v1/persons/${personId}/employee`, {}, {
            params: {
                isEmployee
            }
        })
    }

    public static async updateCustomerByPersonId(personId: number | undefined, isCustomer: boolean) {
        return await AUTH_API.patch<PersonFull>(`/api/v1/persons/${personId}/customer`, {}, {
            params: {
                isCustomer
            }
        })
    }
}