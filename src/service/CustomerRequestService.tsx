import {AUTH_API} from "./api";
import {CustomerRequestPage} from "../model/customer/CustomerRequestPage";
import {CustomerRequestFilterStore} from "../store/customer-request/CustomerRequestFilterStore";
import {ICustomerRequestEvent} from "../model/customer/CustomerRequestEvent";
import qs from "qs";
import {ICustomerRequest} from "../model/customer/CustomerRequest";

export class CustomerRequestService {

    public static async getCustomerRequests(filter: CustomerRequestFilterStore) {
        return await AUTH_API.get<CustomerRequestPage>('/api/v1/customers/requests/', {
            params: {
                ...filter.params()
            },
            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: 'repeat'})
            }
        })
    }

    public static async newCustomerRequest(data: any) {
        return await AUTH_API.post<ICustomerRequest>('/api/v1/customers/requests', data)
    }

    public static async newCoaching(id: number | undefined, data: any) {
        return await AUTH_API.put<ICustomerRequest>(`/api/v1/customers/requests/${id}/coaching`, data)
    }

    public static async getCustomerRequestEvents() {
        return await AUTH_API.get<ICustomerRequestEvent[]>('/api/v1/customers/requests/events')
    }

    public static async saveInfoByCustomerRequestId(id: number | undefined, data: any) {
        return await AUTH_API.patch<ICustomerRequest>(`/api/v1/customers/requests/${id}/info`, data)
    }

    public static async saveNewEventByCustomerRequestId(id: number | undefined, data: any) {
        return await AUTH_API.patch<ICustomerRequest>(`/api/v1/customers/requests/${id}/event`, data)
    }

    public static async saveCallDateTimeByCustomerRequestId(id: number | undefined, data: any) {
        return await AUTH_API.patch<ICustomerRequest>(`/api/v1/customers/requests/${id}/call`, data)
    }

    public static async saveResponseKeyDateByCustomerRequestId(id: number | undefined, data: any) {
        return await AUTH_API.patch<ICustomerRequest>(`/api/v1/customers/requests/${id}/response-date`, data)
    }
}