import {CustomerRequestEventEnum} from "../../model/customer/CustomerRequestEvent";
import {makeAutoObservable} from "mobx";
import {authStore} from "../../index";
import {defaultRequestEventsColor} from "../../theme/Colors";

export class CustomerRequestEventColorStore {

    readonly keyLocalStorage = 'event_colors_'
    mapColors: Map<CustomerRequestEventEnum, string>
    isUpdate: boolean

    constructor() {
        this.mapColors = defaultRequestEventsColor()
        this.isUpdate = false
        makeAutoObservable(this)
    }

    setColorByEvent(event: CustomerRequestEventEnum, color: string) {
        this.mapColors.set(event, color)
        this.isUpdate = true
        if (authStore.user?.username) {
            localStorage.setItem(this.keyLocalStorage + authStore.user.username, JSON.stringify(this.mapColors))
        }
    }

    getColorByEvent(event: CustomerRequestEventEnum) {
        return this.mapColors.has(event)
            ? this.mapColors.get(event)
            : 'text.secondary'
    }

    getBackgroundColorByEvent(event: CustomerRequestEventEnum) {
        return this.mapColors.has(event)
            ? this.mapColors.get(event)
            : 'background.paper'
    }

    updateColorByUserName(username: string) {
        const map = localStorage.getItem(this.keyLocalStorage + username)
        if (map) {
            this.mapColors = new Map<CustomerRequestEventEnum, string>(JSON.parse(map))
        }
    }

    save() {

    }
}