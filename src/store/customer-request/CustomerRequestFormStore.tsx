import {ICustomerRequest} from "../../model/customer/CustomerRequest";
import {makeAutoObservable} from "mobx";
import {ICustomerRequestEvent} from "../../model/customer/CustomerRequestEvent";
import {CustomerRequestService} from "../../service/CustomerRequestService";

export class CustomerRequestFormStore {

    customerRequest?: ICustomerRequest
    customerRequestEvents?: ICustomerRequestEvent[]

    constructor() {
        makeAutoObservable(this)
    }

    setCustomerRequest(customerRequest: ICustomerRequest) {
        this.customerRequest = customerRequest
    }

    setCustomerRequestEvents(customerRequestEvents: ICustomerRequestEvent[]) {
        this.customerRequestEvents = customerRequestEvents
    }

    public async fetchEvents() {
        const response = await CustomerRequestService.getCustomerRequestEvents()
        this.setCustomerRequestEvents(response.data)
    }

}