import {ReactNode} from "react";
import {AppPaths} from "./AppPaths";

interface IAppNavItem {
    readonly title: string
    readonly icon: ReactNode
    readonly path: string
    readonly indexPath: string | null
    readonly items: IAppNavItem[] | null

    getPathName(): string
}

class AppNavItem implements IAppNavItem {

    readonly title: string
    readonly icon: ReactNode
    readonly path: string
    readonly indexPath: string | null
    readonly items: IAppNavItem[] | null

    constructor(title: string, icon: ReactNode, path: string, indexPath: string | null, items: IAppNavItem[] | null) {
        this.title = title;
        this.icon = icon;
        this.path = path;
        this.indexPath = indexPath;
        this.items = items;
    }

    getPathName(): string {
        return `/${this.indexPath}/${this.path}`;
    }


}

const publicNavItems: IAppNavItem[] = [
    // new AppNavItem('HOME', null, AppPaths.index, null),
    // new AppNavItem('Вход', null, AppPaths.login, null),
    new AppNavItem('', null, AppPaths.coachingTimeTable, '', null)
]

const CRMNavItems: IAppNavItem[] = [
    // new AppNavItem('Клиент', null, '', null),
    // new AppNavItem('Касса', null, AppPaths.cash, null),
    // new AppNavItem('Тренер', null, AppPaths.coach, null),
    // new AppNavItem('Товары', null, AppPaths.products, null),
    new AppNavItem('Заявки', null, AppPaths.customerRequests, AppPaths.indexCRM, [
            new AppNavItem('Список заявок', null, AppPaths.customerRequests, null, null),
            new AppNavItem('Новая заявка', null, AppPaths.newCustomerRequests, null, null)
        ],
    ),
    new AppNavItem('График', null, AppPaths.timeTable, AppPaths.indexCRM, [
            new AppNavItem('График тренировок', null, AppPaths.coachingTimeTable, null, null),
        ]
    ),
    new AppNavItem('Беседы', null, AppPaths.conversations, AppPaths.indexCRM, null),
]

export {
    publicNavItems,
    CRMNavItems
};

export type {IAppNavItem};


