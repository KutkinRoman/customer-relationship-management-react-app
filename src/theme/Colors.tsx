import {IColor} from './types';
import {CustomerRequestEventEnum} from '../model/customer/CustomerRequestEvent';

export const colors: IColor[] = [
    {
        primary: 'rgba(250, 84, 28, 1)',
        secondary: 'rgb(29,160,201)'
    },
    {
        primary: 'rgba(31,108,194,0.8)',
        secondary: 'rgba(121,48,189,0.8)'
    },
    {
        primary: 'rgba(110, 0, 255, 1)',
        secondary: 'rgba(0, 197, 254, 1)'
    },
    {
        primary: 'rgba(0, 122, 255, 1)',
        secondary: 'rgba(255, 160, 63, 1)'
    },
]

export const defaultRequestEventsColor = () => {
    const map = new Map<CustomerRequestEventEnum, string>()
    map.set(CustomerRequestEventEnum.VISIT_PLANNED, 'rgba(11, 176, 11, 0.78)')
    map.set(CustomerRequestEventEnum.DATE_TRANS, 'rgba(152, 42, 42, 0.8)')
    map.set(CustomerRequestEventEnum.CREATE, 'rgba(201, 204, 27, 0.81)')
    map.set(CustomerRequestEventEnum.CLOSE, 'rgba(115, 107, 107, 0.88)')
    map.set(CustomerRequestEventEnum.ERROR_QUESTION_SEND, 'rgba(235, 172, 172, 1)')
    map.set(CustomerRequestEventEnum.VISIT, 'rgba(141, 20, 163, 0.75)')
    map.set(CustomerRequestEventEnum.REMIND_CALL, 'rgba(198, 204, 33, 0.83)')
    map.set(CustomerRequestEventEnum.EXPECTING_CALL, 'rgba(191, 203, 33, 0.81)')
    map.set(CustomerRequestEventEnum.NEGATIVE, 'rgba(183, 38, 38, 0.82)')
    map.set(CustomerRequestEventEnum.SUCCESS, 'rgba(36, 181, 199, 0.8)')
    map.set(CustomerRequestEventEnum.QUESTION_NOT_SEND, 'rgba(244, 180, 180, 1)')
    map.set(CustomerRequestEventEnum.WAIT_RESPONSE, 'rgba(168, 76, 76, 0.81)')
    map.set(CustomerRequestEventEnum.BE_CONFIRMED_ID, 'rgba(248, 178, 178, 1)')
    map.set(CustomerRequestEventEnum.EMPTY_ID, 'rgba(237, 172, 172, 1)')
    return map
} 

