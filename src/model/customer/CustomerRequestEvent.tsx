import {action, makeObservable, observable} from "mobx";

export interface ICustomerRequestEvent {
    value: CustomerRequestEventEnum;
    title: string;
}

export enum CustomerRequestEventEnum {
    EMPTY_ID = 'EMPTY_ID',
    BE_CONFIRMED_ID = 'BE_CONFIRMED_ID',
    CREATE = 'CREATE',
    VISIT_PLANNED = 'VISIT_PLANNED',
    WAIT_RESPONSE = 'WAIT_RESPONSE',
    QUESTION_NOT_SEND = 'QUESTION_NOT_SEND',
    ERROR_QUESTION_SEND = 'ERROR_QUESTION_SEND',
    SUCCESS = 'SUCCESS',
    NEGATIVE = 'NEGATIVE',
    DATE_TRANS = 'DATE_TRANS',
    EXPECTING_CALL = 'EXPECTING_CALL',
    REMIND_CALL = 'REMIND_CALL',
    CLOSE = 'CLOSE',
    VISIT = 'VISIT'
}

export const createColorByEvent = (event: CustomerRequestEvent) => {
    switch (event.value) {
        case CustomerRequestEventEnum.EMPTY_ID:
        case CustomerRequestEventEnum.BE_CONFIRMED_ID:
        case CustomerRequestEventEnum.ERROR_QUESTION_SEND:
        case CustomerRequestEventEnum.QUESTION_NOT_SEND:
        case CustomerRequestEventEnum.NEGATIVE:
            return 'error.main'

        case CustomerRequestEventEnum.SUCCESS:
        case CustomerRequestEventEnum.VISIT_PLANNED:
            return 'info.main'

        case CustomerRequestEventEnum.CREATE:
            return 'success.main'

        case CustomerRequestEventEnum.REMIND_CALL:
        case CustomerRequestEventEnum.EXPECTING_CALL:
        case CustomerRequestEventEnum.WAIT_RESPONSE:
        case CustomerRequestEventEnum.DATE_TRANS:
                return 'warning.main'

    }
    return 'text.primary'
}

export class CustomerRequestEvent implements ICustomerRequestEvent {

    value: CustomerRequestEventEnum;
    title: string;

    constructor(event: ICustomerRequestEvent) {
        this.value = event.value;
        this.title = event.title;
    }

}

export class CustomerRequestEventCheckBox extends CustomerRequestEvent {
    isChecked: boolean;

    constructor(event: ICustomerRequestEvent) {
        super(event);
        this.isChecked = true;
        makeObservable(this, {
                isChecked: observable,
                setIsChecked: action
            }
        )
    }

    setIsChecked(isChecked: boolean) {
        this.isChecked = isChecked
    }
}
