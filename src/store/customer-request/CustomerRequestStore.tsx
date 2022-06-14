import {FetchDataStore} from "../FetchDataStore";
import {CustomerRequestService} from "../../service/CustomerRequestService";
import {CustomerRequestPage} from "../../model/customer/CustomerRequestPage";
import {CustomerRequestFilterStore} from "./CustomerRequestFilterStore";
import {CustomerRequestEventCheckBox} from "../../model/customer/CustomerRequestEvent";
import {CustomerRequest} from "../../model/customer/CustomerRequest";

export class CustomerRequestStore extends FetchDataStore<CustomerRequestPage> {

    filter: CustomerRequestFilterStore

    constructor() {
        super(null, () => CustomerRequestService.getCustomerRequests(this.filter));
        this.filter = new CustomerRequestFilterStore();
    }

    public async fetchEvents() {
        const response = await CustomerRequestService.getCustomerRequestEvents()
        this.filter.setEvents(response.data.map(e => new CustomerRequestEventCheckBox(e)))
    }

    setData(value: CustomerRequestPage) {
        value.content = value.content?.map(request => new CustomerRequest(request))
        super.setData(value);
    }

    public fetchFilter() {
        this.filter.page = 1
        this.fetch()
    }

    public reset() {
        this.filter.reset()
        this.fetch()
    }


}