import {makeAutoObservable} from "mobx";
import {CustomerRequestEventCheckBox} from "../../model/customer/CustomerRequestEvent";
import {DateRange} from "@mui/x-date-pickers-pro/DateRangePicker";
import {DateTimeUtils} from "../../utils/DateTimeUtils";


export class CustomerRequestFilterStore {

    page: number
    createDateRange: DateRange<Date>
    planDateRange: DateRange<Date>
    callDateRange: DateRange<Date>
    responseDateRange: DateRange<Date>
    events: CustomerRequestEventCheckBox[]
    isCheckedAll: boolean
    mode: 'list' | 'table';

    constructor() {
        this.page = 1
        this.createDateRange = [null, null]
        this.planDateRange = [null, null]
        this.callDateRange = [null, null]
        this.responseDateRange = [null, null]
        this.events = []
        this.isCheckedAll = true
        this.mode = 'table'
        makeAutoObservable(this)
    }

    setPage(page: number) {
        this.page = page
    }

    setCreateDateRange(value: DateRange<Date>) {
        this.createDateRange = value;
    }

    setPlanDateRange(value: DateRange<Date>) {
        this.planDateRange = value;
    }

    setCallDateRange(value: DateRange<Date>) {
        this.callDateRange = value;
    }

    setResponseDateRange(value: DateRange<Date>) {
        this.responseDateRange = value;
    }

    setEvents(events: CustomerRequestEventCheckBox[]) {
        this.events = events
    }

    setIsCheckedAll(isChecked: boolean) {
        this.isCheckedAll = isChecked
        this.events.forEach(event => event.setIsChecked(this.isCheckedAll))
    }

    reset() {
        this.page = 1
        this.createDateRange = [null, null]
        this.planDateRange = [null, null]
        this.callDateRange = [null, null]
        this.responseDateRange = [null, null]
        this.setIsCheckedAll(true)
    }

    params() {
        return {
            page: this.page,
            event: this.getParamEvents(),
            startCreateDate: DateTimeUtils.toISODateString(this.createDateRange[0]),
            endCreateDate: DateTimeUtils.toISODateString(this.createDateRange[1]),
            startPlanDate: DateTimeUtils.toISODateString(this.planDateRange[0]),
            endPlanDate: DateTimeUtils.toISODateString(this.planDateRange[1]),
            startCallDate: DateTimeUtils.toISODateString(this.callDateRange[0]),
            endCallDate: DateTimeUtils.toISODateString(this.callDateRange[1]),
            startResponseDate: DateTimeUtils.toISODateString(this.responseDateRange[0]),
            endResponseDate: DateTimeUtils.toISODateString(this.responseDateRange[1])
        }
    }

    private getParamEvents() {
        const eventsFilter = this.events.filter(event => event.isChecked)
        return eventsFilter && eventsFilter.length > 0 && eventsFilter.length < this.events.length
            ? eventsFilter.map(event => event.value)
            : null
    }

    setMode(mode: 'list' | 'table') {
        this.mode = mode
    }
}