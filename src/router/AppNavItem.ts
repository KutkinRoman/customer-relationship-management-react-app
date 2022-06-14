import {ReactNode} from "react";
import {AppPaths} from "./AppPaths";

interface IAppNavItem {
    readonly title: string
    readonly icon: ReactNode
    readonly path: string
    readonly items: IAppNavItem[] | null
}

class AppNavItem implements IAppNavItem {

    readonly title: string
    readonly icon: ReactNode
    readonly path: string
    readonly items: IAppNavItem[] | null

    constructor(title: string, icon: ReactNode, path: string, items: IAppNavItem[] | null) {
        this.title = title;
        this.icon = icon;
        this.path = path;
        this.items = items;
    }

}

const publicNavItems: IAppNavItem[] = [
    // new AppNavItem('HOME', null, AppPaths.index, null),
    // new AppNavItem('Вход', null, AppPaths.login, null),
    // new AppNavItem('График тренировок', null, AppPaths.coachingTimeTable, null)
]

const CRMNavItems: IAppNavItem[] = [
    new AppNavItem('Клиент', null, '', null),
    new AppNavItem('Касса', null, AppPaths.cash, null),
    new AppNavItem('Тренер', null, AppPaths.coach, null),
    new AppNavItem('Товары', null, AppPaths.products, null),
    new AppNavItem('Заявки', null, AppPaths.customerRequests, [
            new AppNavItem('Список заявок', null, AppPaths.customerRequests, null),
            new AppNavItem('Новая заявка', null, AppPaths.newCustomerRequests, null)
        ],
    ),
    new AppNavItem('График', null, AppPaths.customerRequests, [
            new AppNavItem('График тренировок', null, AppPaths.coachingTimeTable, null),
        ]
    ),
    new AppNavItem('Бот', null, AppPaths.customerRequests, [
            new AppNavItem('Беседы', null, AppPaths.conversations, null),
        ]
    )
]

export {
    publicNavItems,
    CRMNavItems
};

export type {IAppNavItem};


