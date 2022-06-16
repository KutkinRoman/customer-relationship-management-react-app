import {CustomerRequestEventEnum} from "../../model/customer/CustomerRequestEvent";
import {makeAutoObservable} from "mobx";

export class CustomerRequestEventColorStore {

    mapColors: Map<CustomerRequestEventEnum, string>
    isUpdate: boolean

    constructor() {
        this.mapColors = new Map<CustomerRequestEventEnum, string>();
        this.isUpdate = false
        makeAutoObservable(this)
    }

    setColorByEvent(event: CustomerRequestEventEnum, color: string) {
        this.mapColors.set(event, color)
        this.isUpdate = true
    }

    getColorByEvent(event: CustomerRequestEventEnum) {
        return this.mapColors.has(event)
            ? this.mapColors.get(event)
            : 'text.secondary'
    }

    save() {

    }
}